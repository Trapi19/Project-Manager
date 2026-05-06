// Helpers del Gestor de Proyectos (cargado antes del JSX)
/* Formato visual ES (DD-MM-AAAA) solo para mostrar en pantalla.
   Mantiene ISO interno (AAAA-MM-DD) para Gantt y <input type="date">. */
window.formatFechaES = function (iso) {
  if (!iso) return "";
  var t = String(iso).trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) return t;
  var parts = t.split("-");
  var yyyy = parts[0], mm = parts[1], dd = parts[2];
  return dd + "-" + mm + "-" + yyyy;
};

/* Indicador simple de sincronización.
   Cambio V3: se deja de usar innerHTML para pintar el estado.
   Motivo: aunque los textos eran internos, textContent + nodos DOM reduce superficie de inyección
   y deja el componente preparado para futuros mensajes dinámicos sin riesgo de HTML accidental.
   Estados:
   - ok: sincronizado
   - pending: cambios guardados localmente pendientes de enviar a AWS
   - offline: sin conexión
*/
(function () {
  var PENDING_KEY = 'unitecnic_projects_pending';
  var hideTimer = null;

  function ensureEl() {
    var el = document.getElementById('gp-sync-indicator');
    if (el) return el;
    el = document.createElement('div');
    el.id = 'gp-sync-indicator';
    el.style.position = 'fixed';
    el.style.bottom = '14px';
    el.style.left = '14px';
    el.style.zIndex = '9999';
    el.style.fontSize = '12px';
    el.style.fontFamily = 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif';
    el.style.pointerEvents = 'none';
    el.style.padding = '7px 11px';
    el.style.borderRadius = '999px';
    el.style.boxShadow = '0 14px 30px rgba(0,0,0,.18)';
    el.style.opacity = '0';
    el.style.transition = 'opacity .2s ease, transform .2s ease';
    el.style.display = 'inline-flex';
    el.style.alignItems = 'center';
    el.style.gap = '6px';
    el.style.transform = 'translateY(4px)';
    document.body.appendChild(el);
    return el;
  }

  function paint(el, icon, text, bg, spin) {
    // Sustituimos el contenido de forma segura sin interpretar HTML.
    el.replaceChildren();

    var iconEl = document.createElement('span');
    iconEl.textContent = icon;
    iconEl.setAttribute('aria-hidden', 'true');
    iconEl.style.display = 'inline-block';
    iconEl.style.fontSize = '11px';
    if (spin) iconEl.className = 'gp-sync-spin';

    var textEl = document.createElement('span');
    textEl.textContent = text;

    el.appendChild(iconEl);
    el.appendChild(textEl);
    el.style.background = bg;
    el.style.color = 'white';
    el.style.opacity = '0.95';
    el.style.transform = 'translateY(0)';
  }

  function apply(status) {
    var el = ensureEl();
    if (hideTimer) window.clearTimeout(hideTimer);

    if (status === 'ok') {
      paint(el, '✓', 'Sincronizado', '#16a34a', false);
      hideTimer = window.setTimeout(function () {
        el.style.opacity = '0';
        el.style.transform = 'translateY(4px)';
      }, 3000);
    } else if (status === 'pending') {
      paint(el, '↻', 'Guardando cambios…', '#f59e0b', true);
    } else if (status === 'offline') {
      paint(el, '✕', 'Sin conexión — guardado local', '#ef4444', false);
    } else {
      el.style.opacity = '0';
      el.style.transform = 'translateY(4px)';
    }
  }

  // Expuesto para que app.bundle.js lo use (si existe).
  window.gpSetSyncStatus = apply;

  function refreshFromState() {
    var hasPending = false;
    try { hasPending = !!localStorage.getItem(PENDING_KEY); } catch (e) { hasPending = false; }
    if (typeof navigator !== 'undefined' && navigator.onLine === false) apply('offline');
    else apply(hasPending ? 'pending' : 'ok');
  }

  document.addEventListener('DOMContentLoaded', refreshFromState);
  window.addEventListener('online', refreshFromState);
  window.addEventListener('offline', function () { apply('offline'); });
})();
