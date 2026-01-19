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


/* Indicador simple de sincronización (sin requerir tocar el CSS).
   Estados:
   - ok: sincronizado
   - pending: cambios guardados localmente pendientes de enviar a AWS
   - offline: sin conexión
*/
(function () {
  var PENDING_KEY = 'unitecnic_projects_pending';

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
    el.style.padding = '6px 10px';
    el.style.borderRadius = '999px';
    el.style.boxShadow = '0 10px 15px rgba(0,0,0,.15)';
    el.style.opacity = '0';
    el.style.transition = 'opacity .2s ease';
    document.body.appendChild(el);
    return el;
  }

  function apply(status) {
    var el = ensureEl();
    var text = '';
    var bg = '';
    if (status === 'ok') { text = 'Sincronizado'; bg = '#16a34a'; }
    else if (status === 'pending') { text = 'Pendiente de sincronizar'; bg = '#f59e0b'; }
    else if (status === 'offline') { text = 'Sin conexión'; bg = '#ef4444'; }
    el.textContent = text;
    el.style.background = bg;
    el.style.color = 'white';
    el.style.opacity = text ? '0.95' : '0';
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


