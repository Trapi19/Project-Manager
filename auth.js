/*
  Unitecnic Login (Cognito Hosted UI + OAuth2 Authorization Code Grant with PKCE)
  - Redirects to Cognito if no valid session
  - Exchanges ?code=... for tokens
  - Stores tokens in localStorage
  - Adds Authorization: Bearer <access_token> automatically to API calls
  IMPORTANT: Fill the CONFIG section below with your Cognito / API values.
*/

(function () {
  'use strict';

  // =========================
  // CONFIG (EDIT THESE LINES)
  // =========================
  const CONFIG = {
    // Example: "unitecnic-project-manager" (without https:// and without .auth.<region>.amazoncognito.com)
    cognitoDomainPrefix: "eu-west-1oarpemav6",

    // Example: "eu-west-1"
    cognitoRegion: "eu-west-1",

    // Cognito App client id (public client, no secret)
    cognitoClientId: "4v7k5263ns0vuenil4ba30sr4",

    // Must match Cognito App client Callback URL exactly (include trailing slash if you configured it)
    redirectUri: "https://main.dsdu6jhu0hbyk.amplifyapp.com/",

    // Must match Cognito App client Sign-out URL exactly
    logoutUri: "https://main.dsdu6jhu0hbyk.amplifyapp.com/",

    // If true, we will redirect to Cognito /logout (requires Allowed sign-out URLs to be configured).
    // If false, we clear local tokens and force a fresh login prompt.
    useCognitoLogout: true,

    // Your API base URL (recommended: API Gateway URL). Example: "https://abc123.execute-api.eu-west-1.amazonaws.com"
    apiBaseUrl: "https://2qucj5d6k3qspjcc76f4n45zoa0rphnp.lambda-url.eu-west-1.on.aws/",

    // If true, add Authorization: Bearer <token> header to API calls.
    // NOTE: For Lambda Function URLs this may require allowing the "Authorization" header in CORS.
    // Recommended: keep false until you move to API Gateway + JWT authorizer.
    sendAuthHeaderToApi: false
  };

  // =========================
  // Utilities
  // =========================
  function base64UrlEncode(bytes) {
    const str = btoa(String.fromCharCode.apply(null, bytes));
    return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
  }

  async function sha256Bytes(str) {
    const data = new TextEncoder().encode(str);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return new Uint8Array(digest);
  }

  function randomString(len) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    let out = '';
    const rnd = new Uint8Array(len);
    crypto.getRandomValues(rnd);
    for (let i = 0; i < len; i++) out += chars[rnd[i] % chars.length];
    return out;
  }

  function parseJwt(token) {
    try {
      const payload = token.split('.')[1];
      const b64 = payload.replace(/-/g, '+').replace(/_/g, '/');
      const json = decodeURIComponent(atob(b64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
      return JSON.parse(json);
    } catch (e) {
      return null;
    }
  }

  function nowEpoch() { return Math.floor(Date.now() / 1000); }

  function getStoredSession() {
    try {
      const raw = localStorage.getItem('unitecnic_auth_session');
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  function setStoredSession(session) {
    localStorage.setItem('unitecnic_auth_session', JSON.stringify(session));
  }

  function clearSession() {
    localStorage.removeItem('unitecnic_auth_session');
  }

  function buildCognitoBase() {
    if (!CONFIG.cognitoDomainPrefix || CONFIG.cognitoDomainPrefix === 'RELLENA_ESTO') return null;
    if (!CONFIG.cognitoRegion || CONFIG.cognitoRegion === 'RELLENA_ESTO') return null;
    return `https://${CONFIG.cognitoDomainPrefix}.auth.${CONFIG.cognitoRegion}.amazoncognito.com`;
  }

  function configIsFilled() {
    const base = buildCognitoBase();
    return !!base && CONFIG.cognitoClientId && CONFIG.cognitoClientId !== 'RELLENA_ESTO'
      && CONFIG.apiBaseUrl && CONFIG.apiBaseUrl !== 'RELLENA_ESTO';
  }

  function showConfigError() {
    document.body.innerHTML = `
      <div style="font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; padding: 24px; max-width: 860px; margin: 0 auto;">
        <h1 style="font-size: 20px; font-weight: 700; margin-bottom: 12px;">Configuración de login pendiente</h1>
        <p style="margin-bottom: 12px;">El login (Cognito) está activado, pero faltan valores en <code>auth.js</code>:</p>
        <ul style="margin-bottom: 16px;">
          <li><code>cognitoDomainPrefix</code></li>
          <li><code>cognitoRegion</code></li>
          <li><code>cognitoClientId</code></li>
          <li><code>apiBaseUrl</code></li>
        </ul>
        <p>Abre <code>auth.js</code>, rellena esos campos y vuelve a cargar la página.</p>
      </div>
    `;
  }

  function addAuthBadge(session) {
    try {
      const id = 'unitecnic-auth-badge';
      let el = document.getElementById(id);
      if (!el) {
        el = document.createElement('div');
        el.id = id;
        el.style.position = 'fixed';
        el.style.right = '12px';
        el.style.bottom = '12px';
        el.style.zIndex = '9999';
        el.style.padding = '10px 14px';
        el.style.borderRadius = '9999px';
        el.style.fontSize = '13px';
        el.style.fontFamily = 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif';
        el.style.userSelect = 'none';
        el.style.cursor = 'pointer';
        el.title = 'Clic para cerrar sesión';

        const applyTheme = () => {
          const dark = (document.documentElement && document.documentElement.classList.contains('theme-dark')) ||
                       (document.body && document.body.classList.contains('theme-dark'));
          if (dark) {
            el.style.color = '#ffffff';
            el.style.border = '1px solid rgba(255,255,255,0.18)';
            el.style.background = 'rgba(15,23,42,0.82)'; // slate-900-ish
            el.style.boxShadow = '0 10px 24px rgba(0,0,0,0.45)';
          } else {
            el.style.color = '#0f172a';
            el.style.border = '1px solid rgba(0,0,0,0.12)';
            el.style.background = 'rgba(255,255,255,0.92)';
            el.style.boxShadow = '0 6px 18px rgba(0,0,0,0.12)';
          }
          el.style.backdropFilter = 'blur(8px)';
        };

        // Apply now and keep in sync with theme changes
        applyTheme();
        try {
          const obs = new MutationObserver(() => applyTheme());
          if (document.documentElement) obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
          if (document.body) obs.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        } catch (e) {}

        el.addEventListener('click', () => window.unitecnicLogout && window.unitecnicLogout());
        document.body.appendChild(el);
      }
      const email = session?.claims?.email || 'Sesión activa';
      el.textContent = `Acceso: ${email} (clic para salir)`;
    } catch (e) {}
  }

  // =========================
  // OAuth2 / PKCE flow
  // =========================
  async function startLogin() {
    const base = buildCognitoBase();
    const state = randomString(32);
    const verifier = randomString(64);
    const challengeBytes = await sha256Bytes(verifier);
    const challenge = base64UrlEncode(challengeBytes);

    sessionStorage.setItem('unitecnic_pkce_state', state);
    sessionStorage.setItem('unitecnic_pkce_verifier', verifier);

    const params = new URLSearchParams({
      client_id: CONFIG.cognitoClientId,
      response_type: 'code',
      scope: 'openid email',
      redirect_uri: CONFIG.redirectUri,
      state,
      code_challenge: challenge,
      code_challenge_method: 'S256'
    });

    // If user explicitly clicked "logout", force credential prompt
    try {
      const force = sessionStorage.getItem('unitecnic_force_login');
      if (force === '1') {
        params.set('prompt', 'login');
        sessionStorage.removeItem('unitecnic_force_login');
      }
    } catch (e) {}

    window.location.assign(`${base}/oauth2/authorize?${params.toString()}`);
  }

  async function exchangeCodeForTokens(code, state) {
    const base = buildCognitoBase();
    const expectedState = sessionStorage.getItem('unitecnic_pkce_state');
    const verifier = sessionStorage.getItem('unitecnic_pkce_verifier');

    if (!expectedState || expectedState !== state) {
      // This usually happens if the login was started in a different tab/window (sessionStorage differs),
      // or the flow was restarted before the callback returned.
      sessionStorage.removeItem('unitecnic_pkce_state');
      sessionStorage.removeItem('unitecnic_pkce_verifier');
      // Restart login cleanly
      await startLogin();
      return;
    }
    if (!verifier) throw new Error('Falta code_verifier (PKCE).');

    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: CONFIG.cognitoClientId,
      code,
      redirect_uri: CONFIG.redirectUri,
      code_verifier: verifier
    });

    const res = await fetch(`${base}/oauth2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString()
    });

    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`Error token endpoint: ${res.status} ${txt}`);
    }

    const tok = await res.json();

    const accessClaims = parseJwt(tok.access_token);
    const idClaims = parseJwt(tok.id_token);

    const expiresAt = nowEpoch() + (tok.expires_in || 3600) - 30;

    const session = {
      access_token: tok.access_token,
      id_token: tok.id_token,
      refresh_token: tok.refresh_token || null,
      expires_at: expiresAt,
      claims: idClaims || accessClaims || null
    };

    setStoredSession(session);

    // cleanup
    sessionStorage.removeItem('unitecnic_pkce_state');
    sessionStorage.removeItem('unitecnic_pkce_verifier');

    return session;
  }

  function getValidSessionOrNull() {
    const s = getStoredSession();
    if (!s || !s.access_token || !s.expires_at) return null;
    if (nowEpoch() >= s.expires_at) return null;
    return s;
  }

  // =========================
  // Logout helper
  // =========================
  window.unitecnicLogout = function () {
    // Local sign-out first
    try { clearSession(); } catch (e) {}
    // Force credential prompt next time (useful when Cognito still has a cookie session)
    try { sessionStorage.setItem('unitecnic_force_login', '1'); } catch (e) {}

    // If Cognito logout is enabled and correctly configured, redirect to /logout.
    if (CONFIG.useCognitoLogout) {
      const base = buildCognitoBase();
      if (!base) return window.location.reload();
      const params = new URLSearchParams({
        client_id: CONFIG.cognitoClientId,
        logout_uri: CONFIG.logoutUri
      });
      return window.location.assign(`${base}/logout?${params.toString()}`);
    }

    // Otherwise, just return to the app root; auth.js will redirect to login.
    window.location.assign(CONFIG.logoutUri);
  };

  // =========================
  // Fetch patch: add Authorization header to API calls
  // =========================
  
  function patchFetch() {
    if (!window.fetch || window.__unitecnicFetchPatched) return;

    const orig = window.fetch.bind(window);

    // By default, do NOT add Authorization header to Lambda Function URLs because it can break CORS
    // unless you explicitly allow the "Authorization" header in the Function URL CORS settings.
    const defaultSendAuth = CONFIG.apiBaseUrl ? !String(CONFIG.apiBaseUrl).includes('.lambda-url.') : true;
    const sendAuthHeaderToApi = (typeof CONFIG.sendAuthHeaderToApi === 'boolean')
      ? CONFIG.sendAuthHeaderToApi
      : defaultSendAuth;

    async function refreshIfNeeded() {
      const session = getSession();
      if (!session) return null;

      // Refresh ~30s before expiry
      const now = Math.floor(Date.now() / 1000);
      const exp = Number(session.expires_at || 0);
      if (!session.refresh_token || exp > (now + 30)) return session;

      try {
        const base = buildCognitoBase();
        const body = new URLSearchParams({
          grant_type: 'refresh_token',
          client_id: CONFIG.cognitoClientId,
          refresh_token: session.refresh_token
        });

        const res = await orig(`${base}/oauth2/token`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body
        });

        if (!res.ok) throw new Error(`Refresh token failed (${res.status})`);
        const tok = await res.json();

        const updated = {
          ...session,
          access_token: tok.access_token || session.access_token,
          id_token: tok.id_token || session.id_token,
          // Cognito may or may not return refresh_token on refresh; keep existing
          refresh_token: tok.refresh_token || session.refresh_token,
          expires_at: now + Number(tok.expires_in || 3600),
          token_type: tok.token_type || session.token_type || 'Bearer',
          obtained_at: now
        };

        setSession(updated);
        return updated;
      } catch (e) {
        // If refresh fails, clear local session; next navigation will force login
        clearSession();
        return null;
      }
    }

    window.fetch = async function (input, init) {
      const url = (typeof input === 'string')
        ? input
        : (input && input.url) ? input.url : '';

      // Only decorate calls to your configured API base URL
      const isApi = CONFIG.apiBaseUrl && url && String(url).startsWith(String(CONFIG.apiBaseUrl));

      if (isApi && sendAuthHeaderToApi) {
        const session = await refreshIfNeeded();
        if (session && session.access_token) {
          init = init || {};
          init.headers = init.headers || {};
          if (init.headers instanceof Headers) {
            init.headers.set('Authorization', `Bearer ${session.access_token}`);
          } else {
            init.headers['Authorization'] = `Bearer ${session.access_token}`;
          }
        }
      }

      return orig(input, init);
    };

    window.__unitecnicFetchPatched = true;
  }
        const isApi = CONFIG.apiBaseUrl && rewrittenUrl && rewrittenUrl.startsWith(CONFIG.apiBaseUrl);
        if (isApi && session && session.access_token) {
          init = init || {};
          init.headers = init.headers || {};
          // Normalize Headers object vs plain object
          if (init.headers instanceof Headers) {
            init.headers.set('Authorization', `Bearer ${session.access_token}`);
          } else {
            init.headers['Authorization'] = `Bearer ${session.access_token}`;
          }
        }
      } catch (e) {}
      try {
        if (rewrittenUrl && rewrittenUrl !== url) {
          if (typeof input === 'string') {
            input = rewrittenUrl;
          } else if (input && input.url) {
            input = new Request(rewrittenUrl, input);
          }
        }
      } catch (e) {}
      return orig(input, init);
    };
    window.__unitecnicFetchPatched = true;
  }

  // =========================
  // Main
  // =========================
  (async function main() {
    if (!configIsFilled()) {
      showConfigError();
      return;
    }

    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    const error = url.searchParams.get('error');

    if (error) {
      clearSession();
      document.body.innerHTML = `<div style="font-family: Inter, system-ui; padding: 24px;">Error de login: ${error}</div>`;
      return;
    }

    // Callback from Cognito
    if (code && state) {
      try {
        const session = await exchangeCodeForTokens(code, state);
        // Remove code/state from URL
        url.searchParams.delete('code');
        url.searchParams.delete('state');
        url.searchParams.delete('session_state');
        history.replaceState({}, document.title, url.toString());
        patchFetch();
        addAuthBadge(session);
        // continue load normally
        return;
      } catch (e) {
        clearSession();
        document.body.innerHTML = `<div style="font-family: Inter, system-ui; padding: 24px;">No se ha podido completar el login. ${String(e.message || e)}</div>`;
        return;
      }
    }

    // Normal entry
    const session = getValidSessionOrNull();
    if (!session) {
      // Redirect before app loads
      await startLogin();
      return;
    }

    patchFetch();
    addAuthBadge(session);
  })();
})();
