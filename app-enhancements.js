/* =========================================================
   MEJORAS V4 — COMPORTAMIENTO, UX Y HARDENING
   ---------------------------------------------------------
   No toca estructura de datos ni sustituye componentes React.
   Añade protecciones y mejoras de experiencia alrededor de
   la app existente.
   ========================================================= */
(function () {
  'use strict';

  var PENDING_KEY  = 'unitecnic_projects_pending';
  var TOAST_STACK  = 'gp-toast-stack';
  var BASE_FONT    = "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";
  var TOAST_DURATION = 6000;

  /* ── Utilidad: ¿hay cambios sin sincronizar? ── */
  function hasPendingChanges() {
    try { return !!localStorage.getItem(PENDING_KEY); }
    catch (e) { return false; }
  }

  /* ── Inyectar keyframes del sistema de toasts (una sola vez) ── */
  function injectToastStyles() {
    if (document.getElementById('gp-toast-kf')) return;
    var s = document.createElement('style');
    s.id = 'gp-toast-kf';
    s.textContent = [
      '@keyframes gpToastIn {from{opacity:0;transform:translateX(24px) scale(.96)}to{opacity:1;transform:translateX(0) scale(1)}}',
      '@keyframes gpToastOut{from{opacity:1;transform:translateX(0) scale(1)}to{opacity:0;transform:translateX(24px) scale(.94)}}',
      '@keyframes gpProgress{from{width:100%}to{width:0%}}'
    ].join('');
    document.head.appendChild(s);
  }

  /* ── Contenedor de toasts (stack) ── */
  function getStack() {
    var el = document.getElementById(TOAST_STACK);
    if (el) return el;
    injectToastStyles();
    el = document.createElement('div');
    el.id = TOAST_STACK;
    el.className = 'no-print';
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-atomic', 'false');
    Object.assign(el.style, {
      position:       'fixed',
      bottom:         '22px',
      right:          '20px',
      zIndex:         '10001',
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'flex-end',
      gap:            '10px',
      pointerEvents:  'none'
    });
    document.body.appendChild(el);
    return el;
  }

  /* ── Configuración visual por tono ── */
  var TONES = {
    error: {
      bg:     'rgba(185,28,28,.92)',
      border: 'rgba(239,68,68,.45)',
      bar:    '#fca5a5',
      icon:   '⚠',
      title:  'Error de interfaz'
    },
    warn: {
      bg:     'rgba(180,83,9,.92)',
      border: 'rgba(245,158,11,.45)',
      bar:    '#fde68a',
      icon:   '●',
      title:  'Aviso'
    },
    info: {
      bg:     'rgba(3,105,161,.92)',
      border: 'rgba(56,189,248,.45)',
      bar:    '#7dd3fc',
      icon:   '○',
      title:  'Información'
    },
    success: {
      bg:     'rgba(5,122,85,.92)',
      border: 'rgba(16,185,129,.45)',
      bar:    '#6ee7b7',
      icon:   '✓',
      title:  'Listo'
    }
  };

  /* ── Crear y mostrar un toast ── */
  function createToast(message, tone) {
    var stack = getStack();
    var cfg   = TONES[tone] || TONES.error;
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* Contenedor del toast */
    var el = document.createElement('div');
    el.className = 'no-print';
    el.setAttribute('role', 'alert');
    Object.assign(el.style, {
      position:        'relative',
      minWidth:        '260px',
      maxWidth:        '360px',
      padding:         '12px 14px 16px',
      borderRadius:    '18px',
      border:          '1px solid ' + cfg.border,
      background:      cfg.bg,
      backdropFilter:  'blur(18px) saturate(1.2)',
      boxShadow:       '0 16px 48px rgba(0,0,0,.30), inset 0 1px 0 rgba(255,255,255,.14)',
      fontFamily:      BASE_FONT,
      color:           '#fff',
      pointerEvents:   'auto',
      overflow:        'hidden',
      animation:       reduced ? 'none' : 'gpToastIn .25s cubic-bezier(0.34,1.35,0.64,1) both'
    });

    /* Fila superior: icono + título + botón cerrar */
    var header = document.createElement('div');
    Object.assign(header.style, {
      display:        'flex',
      alignItems:     'center',
      gap:            '8px',
      marginBottom:   '5px'
    });

    var iconEl = document.createElement('span');
    iconEl.textContent = cfg.icon;
    iconEl.setAttribute('aria-hidden', 'true');
    Object.assign(iconEl.style, {
      fontSize:    '13px',
      fontWeight:  '800',
      opacity:     '.9',
      flexShrink:  '0'
    });

    var titleEl = document.createElement('span');
    titleEl.textContent = cfg.title;
    Object.assign(titleEl.style, {
      fontSize:    '13px',
      fontWeight:  '700',
      letterSpacing: '-.01em',
      flex:        '1'
    });

    var closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.setAttribute('aria-label', 'Cerrar');
    Object.assign(closeBtn.style, {
      background:   'none',
      border:       'none',
      color:        'rgba(255,255,255,.7)',
      cursor:       'pointer',
      fontSize:     '12px',
      padding:      '2px 4px',
      borderRadius: '6px',
      lineHeight:   '1',
      transition:   'color .15s ease'
    });
    closeBtn.addEventListener('mouseenter', function () { closeBtn.style.color = '#fff'; });
    closeBtn.addEventListener('mouseleave', function () { closeBtn.style.color = 'rgba(255,255,255,.7)'; });
    closeBtn.addEventListener('click', function () { dismiss(el); });

    header.appendChild(iconEl);
    header.appendChild(titleEl);
    header.appendChild(closeBtn);

    /* Cuerpo del mensaje */
    var body = document.createElement('p');
    body.textContent = message;
    Object.assign(body.style, {
      margin:       '0',
      fontSize:     '12.5px',
      lineHeight:   '1.45',
      opacity:      '.88',
      paddingLeft:  '21px'
    });

    /* Barra de progreso de tiempo */
    var progressTrack = document.createElement('div');
    Object.assign(progressTrack.style, {
      position:     'absolute',
      bottom:       '0', left:  '0', right: '0',
      height:       '3px',
      background:   'rgba(255,255,255,.12)',
      borderRadius: '0 0 18px 18px',
      overflow:     'hidden'
    });

    var progressBar = document.createElement('div');
    Object.assign(progressBar.style, {
      height:           '100%',
      width:            '100%',
      background:       cfg.bar,
      borderRadius:     'inherit',
      animation:        reduced ? 'none' : ('gpProgress ' + (TOAST_DURATION / 1000) + 's linear forwards')
    });

    progressTrack.appendChild(progressBar);
    el.appendChild(header);
    el.appendChild(body);
    el.appendChild(progressTrack);
    stack.appendChild(el);

    /* Auto-dismiss */
    var timer = window.setTimeout(function () { dismiss(el); }, TOAST_DURATION);
    el.dataset.timer = timer;
    return el;
  }

  function dismiss(el) {
    if (!el || !el.parentNode) return;
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { el.remove(); return; }
    el.style.animation = 'gpToastOut .2s ease forwards';
    window.setTimeout(function () { if (el.parentNode) el.remove(); }, 220);
  }

  /* ── Protección: arrastrar archivo a la página ── */
  ['dragover', 'drop'].forEach(function (eventName) {
    window.addEventListener(eventName, function (event) {
      var dt = event.dataTransfer;
      if (!dt || !dt.files || dt.files.length === 0) return;
      var target    = event.target;
      var isFileInput = target && target.tagName === 'INPUT' && target.type === 'file';
      if (!isFileInput) {
        event.preventDefault();
        if (eventName === 'drop') {
          createToast('Usa los botones de Importar para cargar archivos y evitar sobrescribir la página.', 'warn');
        }
      }
    });
  });

  /* ── Aviso al cerrar con cambios pendientes ── */
  window.addEventListener('beforeunload', function (event) {
    if (!hasPendingChanges()) return;
    event.preventDefault();
    event.returnValue = '';
  });

  /* ── Clases para CSS progresivo ── */
  document.documentElement.classList.add('gp-js-ready');
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('gp-reduced-motion');
  }

  /* ── Errores de runtime → toast ── */
  window.addEventListener('error', function (event) {
    if (!event || !event.message) return;
    createToast('Se detectó un error de interfaz. Revisa la consola o recarga si algo no responde.', 'error');
  });

  window.addEventListener('unhandledrejection', function () {
    createToast('Una operación no se completó. Comprueba tu conexión y el estado de sincronización.', 'warn');
  });

  /* ── Exponer para uso manual desde la app ── */
  window.gpToast = createToast;
})();
