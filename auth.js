/*
  Unitecnic Login (Cognito Managed Login / Hosted UI)
  OAuth2 Authorization Code Grant with PKCE (public client)

  Goals for this project:
  - Force login to access the app
  - Keep cloud sync working with Lambda Function URL (avoid CORS preflight issues)
  - Provide a clear "logout" action
*/

(function () {
  'use strict';

  // =========================
  // CONFIG
  // =========================
  const CONFIG = {
    // Cognito domain prefix (no https:// and no ".auth.<region>.amazoncognito.com")
    cognitoDomainPrefix: "eu-west-1oarpemav6",
    cognitoRegion: "eu-west-1",
    cognitoClientId: "4v7k5263ns0vuenil4ba30sr4",

    // Must match the Callback URL in the App client settings
    redirectUri: "https://main.dsdu6jhu0hbyk.amplifyapp.com/",

    // Must match an Allowed sign-out URL in the App client settings
    logoutUri: "https://main.dsdu6jhu0hbyk.amplifyapp.com/",

    // Your backend endpoint (Lambda Function URL). Keep the trailing slash if your app uses it.
    apiBaseUrl: "https://2qucj5d6k3qspjcc76f4n45zoa0rphnp.lambda-url.eu-west-1.on.aws/",

    // IMPORTANT:
    // - If your backend is a Lambda Function URL, sending Authorization triggers a CORS preflight (OPTIONS).
    //   If CORS is not configured to allow Authorization, the browser blocks the request and sync fails.
    // - Therefore, default is false. Turn it on ONLY after you protect the backend properly (API Gateway + JWT authorizer, or Function URL CORS configured).
    sendAuthHeaderToApi: false,

    // Scopes requested from Cognito
    scopes: "openid email profile",

    // LocalStorage key
    storageKey: "unitecnic_auth_session_v1",

    // Optional: force re-auth every time (set true only for debugging)
    forceLogin: false
  };

  // If apiBaseUrl is a Lambda Function URL, we hard-disable Authorization header to keep sync reliable.
  if (String(CONFIG.apiBaseUrl || "").includes(".lambda-url.")) {
    CONFIG.sendAuthHeaderToApi = false;
  }

  const cognitoBase = `https://${CONFIG.cognitoDomainPrefix}.auth.${CONFIG.cognitoRegion}.amazoncognito.com`;

  // =========================
  // Small utilities
  // =========================
  function nowSec() { return Math.floor(Date.now() / 1000); }

  function randomString(len) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let out = "";
    const arr = new Uint8Array(len);
    crypto.getRandomValues(arr);
    for (let i = 0; i < arr.length; i++) out += chars[arr[i] % chars.length];
    return out;
  }

  function base64UrlEncode(bytes) {
    let str = "";
    bytes.forEach(b => str += String.fromCharCode(b));
    return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
  }

  function base64UrlDecodeToJson(tokenPart) {
    const pad = tokenPart.length % 4 === 0 ? "" : "=".repeat(4 - (tokenPart.length % 4));
    const b64 = (tokenPart + pad).replace(/-/g, "+").replace(/_/g, "/");
    const json = atob(b64);
    return JSON.parse(json);
  }

  function parseJwt(token) {
    try {
      const parts = String(token || "").split(".");
      if (parts.length < 2) return null;
      return base64UrlDecodeToJson(parts[1]);
    } catch {
      return null;
    }
  }

  function saveSession(s) {
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(s));
  }

  function loadSession() {
    try { return JSON.parse(localStorage.getItem(CONFIG.storageKey) || "null"); }
    catch { return null; }
  }

  function clearSession() {
    localStorage.removeItem(CONFIG.storageKey);
    localStorage.removeItem("unitecnic_pkce_verifier");
    localStorage.removeItem("unitecnic_oauth_state");
    localStorage.removeItem("unitecnic_oauth_started_at");
  }

  function isSessionValid(session) {
    if (!session || !session.access_token || !session.expires_at) return false;
    return session.expires_at - 30 > nowSec(); // 30s grace
  }

  function setTopError(msg) {
    document.body.innerHTML = `
      <div style="font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; padding: 24px;">
        <div style="max-width: 920px; margin: 0 auto;">
          <h2 style="font-size: 18px; margin: 0 0 8px;">No se ha podido completar el login</h2>
          <div style="background: rgba(255,0,0,.08); border: 1px solid rgba(255,0,0,.25); border-radius: 12px; padding: 12px 14px;">
            ${msg}
          </div>
          <div style="margin-top: 14px;">
            <button id="btnRetry" style="padding: 10px 14px; border-radius: 10px; border: 1px solid rgba(255,255,255,.2); background: rgba(0,0,0,.15); cursor: pointer;">
              Reintentar login
            </button>
            <button id="btnClear" style="padding: 10px 14px; border-radius: 10px; border: 1px solid rgba(255,255,255,.2); background: rgba(0,0,0,.05); cursor: pointer; margin-left: 8px;">
              Limpiar sesión
            </button>
          </div>
        </div>
      </div>
    `;
    const btnRetry = document.getElementById("btnRetry");
    const btnClear = document.getElementById("btnClear");
    if (btnClear) btnClear.onclick = () => { clearSession(); location.href = CONFIG.redirectUri; };
    if (btnRetry) btnRetry.onclick = () => { clearSession(); startLogin(); };
  }

  // =========================
  // PKCE helpers
  // =========================
  async function pkceChallengeFromVerifier(verifier) {
    const data = new TextEncoder().encode(verifier);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return base64UrlEncode(new Uint8Array(digest));
  }

  async function startLogin() {
    const state = randomString(24);
    const verifier = randomString(64);

    localStorage.setItem("unitecnic_oauth_state", state);
    localStorage.setItem("unitecnic_pkce_verifier", verifier);
    localStorage.setItem("unitecnic_oauth_started_at", String(Date.now()));

    const challenge = await pkceChallengeFromVerifier(verifier);

    const authorize = new URL(cognitoBase + "/oauth2/authorize");
    authorize.searchParams.set("client_id", CONFIG.cognitoClientId);
    authorize.searchParams.set("response_type", "code");
    authorize.searchParams.set("scope", CONFIG.scopes);
    authorize.searchParams.set("redirect_uri", CONFIG.redirectUri);
    authorize.searchParams.set("state", state);
    authorize.searchParams.set("code_challenge_method", "S256");
    authorize.searchParams.set("code_challenge", challenge);

    window.location.assign(authorize.toString());
  }

  async function exchangeCodeForTokens(code) {
    const verifier = localStorage.getItem("unitecnic_pkce_verifier") || "";
    if (!verifier) throw new Error("Falta el code_verifier (PKCE).");

    const tokenUrl = cognitoBase + "/oauth2/token";

    const body = new URLSearchParams();
    body.set("grant_type", "authorization_code");
    body.set("client_id", CONFIG.cognitoClientId);
    body.set("code", code);
    body.set("redirect_uri", CONFIG.redirectUri);
    body.set("code_verifier", verifier);

    const res = await fetch(tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString()
    });

    if (!res.ok) {
      const t = await res.text().catch(() => "");
      throw new Error(`Token exchange falló (${res.status}). ${t}`);
    }
    return await res.json();
  }

  // =========================
  // Fetch patch (optional auth header)
  // =========================
  function patchFetch(session) {
    if (!CONFIG.sendAuthHeaderToApi) return;
    if (!window.fetch || window.__unitecnicFetchPatched) return;

    const origFetch = window.fetch.bind(window);
    window.fetch = function (input, init) {
      const url = (typeof input === "string") ? input : (input && input.url) ? input.url : "";
      const isApi = CONFIG.apiBaseUrl && url && url.startsWith(CONFIG.apiBaseUrl);

      if (isApi && session && session.access_token) {
        init = init || {};
        init.headers = init.headers || {};

        if (init.headers instanceof Headers) {
          init.headers.set("Authorization", "Bearer " + session.access_token);
        } else {
          init.headers["Authorization"] = "Bearer " + session.access_token;
        }
      }
      return origFetch(input, init);
    };

    window.__unitecnicFetchPatched = true;
  }

  // =========================
  // UI badge + logout
  // =========================
  function addAuthBadge(session) {
    // Remove existing
    const prev = document.getElementById("unitecnic-auth-badge");
    if (prev) prev.remove();

    const idClaims = parseJwt(session && session.id_token);
    const email = (idClaims && (idClaims.email || idClaims["cognito:username"])) || "usuario";

    const badge = document.createElement("button");
    badge.id = "unitecnic-auth-badge";
    badge.type = "button";
    badge.textContent = `Acceso: ${email} (clic para salir)`;

    // Good contrast in dark + light modes
    badge.style.position = "fixed";
    badge.style.right = "14px";
    badge.style.bottom = "14px";
    badge.style.zIndex = "9999";
    badge.style.padding = "10px 12px";
    badge.style.borderRadius = "999px";
    badge.style.border = "1px solid rgba(255,255,255,.18)";
    badge.style.background = "rgba(15, 23, 42, .70)"; // slate-ish
    badge.style.color = "rgba(255,255,255,.92)";
    badge.style.backdropFilter = "blur(10px)";
    badge.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    badge.style.cursor = "pointer";
    badge.style.fontFamily = "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif";
    badge.style.fontSize = "13px";
    badge.style.lineHeight = "1";

    badge.onmouseenter = () => { badge.style.background = "rgba(15, 23, 42, .82)"; };
    badge.onmouseleave = () => { badge.style.background = "rgba(15, 23, 42, .70)"; };

    badge.onclick = () => {
      clearSession();
      const logout = new URL(cognitoBase + "/logout");
      logout.searchParams.set("client_id", CONFIG.cognitoClientId);
      logout.searchParams.set("logout_uri", CONFIG.logoutUri);
      // Force re-auth, avoid odd cached states
      logout.searchParams.set("state", randomString(16));
      window.location.assign(logout.toString());
    };

    document.body.appendChild(badge);
  }

  // =========================
  // Main
  // =========================
  async function main() {
    if (!window.crypto || !crypto.subtle) {
      setTopError("Este navegador no soporta WebCrypto (necesario para PKCE). Prueba con Chrome/Edge actualizado.");
      return;
    }

    // Handle callback (?code=...&state=...)
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    const error = url.searchParams.get("error");
    const errorDesc = url.searchParams.get("error_description");

    if (error) {
      setTopError(`${error}: ${errorDesc || ""}`);
      return;
    }

    if (code) {
      try {
        const expectedState = localStorage.getItem("unitecnic_oauth_state") || "";
        if (!expectedState || state !== expectedState) {
          // Auto-recover
          clearSession();
          setTopError("Estado OAuth inválido (state mismatch). Pulsa “Reintentar login”.");
          return;
        }

        const token = await exchangeCodeForTokens(code);
        const expiresIn = Number(token.expires_in || 3600);

        const session = {
          access_token: token.access_token,
          id_token: token.id_token,
          refresh_token: token.refresh_token,
          token_type: token.token_type,
          expires_at: nowSec() + expiresIn
        };

        saveSession(session);

        // Clean URL (remove code/state)
        url.searchParams.delete("code");
        url.searchParams.delete("state");
        url.searchParams.delete("session_state");
        url.searchParams.delete("iss");
        history.replaceState({}, document.title, url.toString());

        patchFetch(session);
        addAuthBadge(session);
        return; // let the app load
      } catch (e) {
        clearSession();
        setTopError(String(e && e.message ? e.message : e));
        return;
      }
    }

    // Normal entry (no code param)
    if (CONFIG.forceLogin) {
      clearSession();
    }

    const session = loadSession();
    if (!isSessionValid(session)) {
      clearSession();
      await startLogin();
      return;
    }

    patchFetch(session);
    addAuthBadge(session);
  }

  // Start
  main().catch((e) => {
    clearSession();
    setTopError(String(e && e.message ? e.message : e));
  });

})();
