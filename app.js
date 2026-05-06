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

/* Indicador premium de sincronización V4.
   Usa nodos DOM seguros (sin innerHTML). Diseño pill con punto
   de pulso animado para el estado pending, y desvanecimiento
   suave para el estado ok.
   Estados:
   - ok      : sincronizado (se oculta a los 3 s)
   - pending : cambios guardados localmente pendientes de AWS
   - offline : sin conexión de red
*/
(function () {
  'use strict';
  var PENDING_KEY = 'unitecnic_projects_pending';
  var hideTimer   = null;
  var BASE_FONT   = "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";

  /* Paleta por estado */
  var STATES = {
    ok:      { bg: 'rgba(16,185,129,.92)',  border: 'rgba(16,185,129,.55)',  text: '#fff', dot: '#a7f3d0', label: 'Sincronizado'              },
    pending: { bg: 'rgba(217,119,6,.92)',   border: 'rgba(245,158,11,.55)',  text: '#fff', dot: '#fde68a', label: 'Guardando cambios…'         },
    offline: { bg: 'rgba(185,28,28,.90)',   border: 'rgba(239,68,68,.55)',   text: '#fff', dot: '#fecaca', label: 'Sin conexión — local'        }
  };

  /* Inyecta los keyframes de pulso una sola vez */
  function injectStyles() {
    if (document.getElementById('gp-sync-kf')) return;
    var s = document.createElement('style');
    s.id = 'gp-sync-kf';
    s.textContent =
      '@keyframes gpDotPulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.55);opacity:.6}}' +
      '@keyframes gpSyncSpin{to{transform:rotate(360deg)}}';
    document.head.appendChild(s);
  }

  function ensureEl() {
    var el = document.getElementById('gp-sync-indicator');
    if (el) return el;
    injectStyles();
    el = document.createElement('div');
    el.id = 'gp-sync-indicator';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    Object.assign(el.style, {
      position:       'fixed',
      bottom:         '18px',
      left:           '18px',
      zIndex:         '9999',
      display:        'inline-flex',
      alignItems:     'center',
      gap:            '8px',
      padding:        '7px 14px 7px 10px',
      borderRadius:   '999px',
      border:         '1px solid transparent',
      fontFamily:     BASE_FONT,
      fontSize:       '12.5px',
      fontWeight:     '650',
      letterSpacing:  '.01em',
      pointerEvents:  'none',
      backdropFilter: 'blur(14px) saturate(1.2)',
      boxShadow:      '0 8px 28px rgba(0,0,0,.22), inset 0 1px 0 rgba(255,255,255,.14)',
      opacity:        '0',
      transform:      'translateY(6px) scale(.97)',
      transition:     'opacity .22s ease, transform .22s ease'
    });
    document.body.appendChild(el);
    return el;
  }

  function paint(el, state, spin) {
    var cfg = STATES[state] || STATES.ok;
    el.replaceChildren();

    /* Punto indicador */
    var dot = document.createElement('span');
    dot.setAttribute('aria-hidden', 'true');
    Object.assign(dot.style, {
      display:      'inline-block',
      width:        '7px',
      height:       '7px',
      borderRadius: '50%',
      background:   cfg.dot,
      flexShrink:   '0',
      animation:    spin
        ? 'gpDotPulse 1s ease-in-out infinite'
        : state === 'ok' ? 'none' : 'gpDotPulse 1.6s ease-in-out infinite'
    });

    /* Texto */
    var txt = document.createElement('span');
    txt.textContent = cfg.label;

    el.appendChild(dot);
    el.appendChild(txt);

    /* Estilos del contenedor */
    el.style.background    = cfg.bg;
    el.style.borderColor   = cfg.border;
    el.style.color         = cfg.text;
    el.style.opacity       = '1';
    el.style.transform     = 'translateY(0) scale(1)';
  }

  function hide(el) {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(6px) scale(.97)';
  }

  function apply(status) {
    var el = ensureEl();
    if (hideTimer) { window.clearTimeout(hideTimer); hideTimer = null; }

    if (status === 'ok') {
      paint(el, 'ok', false);
      hideTimer = window.setTimeout(function () { hide(el); }, 3200);
    } else if (status === 'pending') {
      paint(el, 'pending', true);
    } else if (status === 'offline') {
      paint(el, 'offline', false);
    } else {
      hide(el);
    }
  }

  window.gpSetSyncStatus = apply;

  function refreshFromState() {
    var hasPending = false;
    try { hasPending = !!localStorage.getItem(PENDING_KEY); } catch (e) {}
    if (typeof navigator !== 'undefined' && navigator.onLine === false) apply('offline');
    else apply(hasPending ? 'pending' : 'ok');
  }

  document.addEventListener('DOMContentLoaded', refreshFromState);
  window.addEventListener('online',  refreshFromState);
  window.addEventListener('offline', function () { apply('offline'); });
})();
