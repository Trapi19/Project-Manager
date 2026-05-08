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

/* =========================================================
   CHART.JS V4 — CONFIGURACIÓN PREMIUM
   ---------------------------------------------------------
   Se ejecuta después de que Chart.js y app.bundle.js carguen.
   No modifica el bundle: usa defaults globales y un plugin
   registrado que se aplica a todos los gráficos.
   ========================================================= */
(function () {
  'use strict';

  function applyChartDefaults() {
    var C = window.Chart;
    if (!C || !C.defaults) return;

    var isDark = document.documentElement.classList.contains('theme-dark');

    /* ── Colores reactivos al tema ── */
    var textColor  = isDark ? '#94a3b8' : '#64748b';
    var gridColor  = isDark ? 'rgba(148,163,184,.10)' : 'rgba(148,163,184,.18)';
    var tooltipBg  = isDark ? 'rgba(6,12,26,.95)'    : 'rgba(255,255,255,.97)';
    var tooltipTxt = isDark ? '#e2e8f0'               : '#1e293b';
    var tooltipSub = isDark ? '#64748b'               : '#94a3b8';

    /* ── Tipografía ── */
    C.defaults.font.family  = "'Inter', system-ui, -apple-system, sans-serif";
    C.defaults.font.size    = 12;
    C.defaults.font.weight  = '500';

    /* ── Color global de texto / grid ── */
    C.defaults.color       = textColor;
    C.defaults.borderColor = gridColor;

    /* ── Animación suave ── */
    C.defaults.animation.duration = 700;
    C.defaults.animation.easing   = 'easeOutQuart';

    /* ── Barras: esquinas redondeadas por defecto ── */
    if (C.defaults.elements && C.defaults.elements.bar) {
      C.defaults.elements.bar.borderRadius   = 8;
      C.defaults.elements.bar.borderSkipped  = false;
    }

    /* ── Donut: corte más fino (más elegante) ── */
    if (C.defaults.datasets && C.defaults.datasets.doughnut) {
      C.defaults.datasets.doughnut.cutout = '74%';
    }

    /* ── Tooltips premium ── */
    var tp = C.defaults.plugins.tooltip;
    tp.backgroundColor  = tooltipBg;
    tp.titleColor       = tooltipTxt;
    tp.bodyColor        = tooltipSub;
    tp.borderColor      = isDark ? 'rgba(255,255,255,.10)' : 'rgba(15,23,42,.08)';
    tp.borderWidth      = 1;
    tp.cornerRadius     = 12;
    tp.padding          = { top:10, bottom:10, left:12, right:12 };
    tp.boxPadding       = 5;
    tp.caretSize        = 5;
    tp.titleFont        = { family: "'Inter', sans-serif", size: 12, weight: '700' };
    tp.bodyFont         = { family: "'Inter', sans-serif", size: 12, weight: '500' };
    tp.callbacks        = tp.callbacks || {};

    /* ── Leyenda ── */
    var lbl = C.defaults.plugins.legend.labels;
    lbl.boxWidth    = 10;
    lbl.boxHeight   = 10;
    lbl.padding     = 16;
    lbl.font        = { family: "'Inter', sans-serif", size: 11.5, weight: '600' };
    lbl.color       = textColor;
    lbl.usePointStyle = true;
    lbl.pointStyle  = 'circle';

    /* ── Ejes ── */
    var scales = C.defaults.scales;
    if (scales) {
      ['x','y','r'].forEach(function (ax) {
        if (!scales[ax]) return;
        if (scales[ax].grid) {
          scales[ax].grid.color       = gridColor;
          scales[ax].grid.borderColor = 'transparent';
          scales[ax].grid.lineWidth   = 1;
        }
        if (scales[ax].ticks) {
          scales[ax].ticks.color  = textColor;
          scales[ax].ticks.font   = { family: "'Inter', sans-serif", size: 11, weight: '500' };
          scales[ax].ticks.padding = 6;
        }
      });
    }
  }

  /* ── Colores semánticos para prioridades ── */
  var PRIO_COLORS = {
    'Urgente': { bg: 'rgba(239,68,68,.82)',   border: 'rgba(239,68,68,.0)' },
    'Alta':    { bg: 'rgba(245,158,11,.82)',  border: 'rgba(245,158,11,.0)' },
    'Media':   { bg: 'rgba(59,130,246,.82)',  border: 'rgba(59,130,246,.0)' },
    'Baja':    { bg: 'rgba(16,185,129,.82)',  border: 'rgba(16,185,129,.0)' }
  };

  var PRIO_LABELS = Object.keys(PRIO_COLORS);

  function isPrioChart(labels) {
    return labels && labels.some(function (l) { return PRIO_LABELS.indexOf(l) !== -1; });
  }

  /* ── Plugin: gradientes + colores por categoría ── */
  function registerV4Plugin() {
    var C = window.Chart;
    if (!C || !C.register || C.__v4PluginDone) return;
    C.__v4PluginDone = true;

    C.register({
      id: 'v4Premium',

      /* Texto central en el donut */
      beforeDraw: function (chart) {
        if (chart.config.type !== 'doughnut') return;
        var ds = chart.data.datasets && chart.data.datasets[0];
        if (!ds) return;
        var total = ds.data.reduce(function (a, b) { return a + (b || 0); }, 0);
        if (!total) return;

        var area = chart.chartArea;
        if (!area) return;
        var cx = (area.left + area.right) / 2;
        var cy = (area.top  + area.bottom) / 2;
        var isDark = document.documentElement.classList.contains('theme-dark');

        var ctx = chart.ctx;
        ctx.save();
        ctx.textAlign    = 'center';
        ctx.textBaseline = 'middle';

        /* Número grande */
        ctx.font      = "800 30px 'Inter', sans-serif";
        ctx.fillStyle = isDark ? '#f1f5f9' : '#0f172a';
        ctx.fillText(total, cx, cy - 11);

        /* Etiqueta pequeña */
        ctx.font      = "600 11px 'Inter', sans-serif";
        ctx.fillStyle = isDark ? '#64748b' : '#94a3b8';
        ctx.fillText('TAREAS', cx, cy + 12);

        ctx.restore();
      },

      /* Gradientes en barras + colores de prioridad.
         afterUpdate: Chart.js ya resolvió los colores en los elementos,
         así que modificamos el.options directamente para que persistan
         en hover, resize y cualquier redibujado. */
      afterUpdate: function (chart) {
        if (chart.config.type !== 'bar') return;

        var ctx   = chart.ctx;
        var area  = chart.chartArea;
        if (!area) return;

        var labels = chart.data.labels || [];
        var isDark = document.documentElement.classList.contains('theme-dark');
        var isPrio = isPrioChart(labels);
        var pluginOpts = (chart.options && chart.options.plugins && chart.options.plugins.v4Premium) || {};
        var preserveDatasetColors = !!pluginOpts.preserveDatasetColors;

        /* Degradado reutilizable (uno por chart, no por barra) */
        var gradient = null;
        if (!isPrio && !preserveDatasetColors) {
          gradient = ctx.createLinearGradient(0, area.top, 0, area.bottom);
          if (isDark) {
            gradient.addColorStop(0,   'rgba(56,189,248,.90)');
            gradient.addColorStop(0.5, 'rgba(99,102,241,.82)');
            gradient.addColorStop(1,   'rgba(139,92,246,.72)');
          } else {
            gradient.addColorStop(0,   'rgba(14,165,233,.90)');
            gradient.addColorStop(0.5, 'rgba(99,102,241,.82)');
            gradient.addColorStop(1,   'rgba(139,92,246,.74)');
          }
        }

        var metas = chart._metasets;
        if (!metas) return;

        for (var i = 0; i < metas.length; i++) {
          var meta = metas[i];
          if (!meta || !meta.data) continue;
          var dataset = chart.data.datasets[i];
          if (!dataset) continue;

          dataset.borderWidth   = 0;
          dataset.borderRadius  = preserveDatasetColors ? 0 : 8;
          dataset.borderSkipped = false;

          for (var j = 0; j < meta.data.length; j++) {
            var el = meta.data[j];
            if (!el || !el.options) continue;

            if (isPrio) {
              var lbl = labels[j];
              el.options.backgroundColor = (PRIO_COLORS[lbl] && PRIO_COLORS[lbl].bg) || 'rgba(99,102,241,.78)';
            } else if (preserveDatasetColors) {
              var baseColor = dataset.backgroundColor;
              if (Array.isArray(baseColor)) baseColor = baseColor[j] || baseColor[0];
              el.options.backgroundColor = baseColor || 'rgba(99,102,241,.78)';
              el.options.hoverBackgroundColor = dataset.hoverBackgroundColor || baseColor || 'rgba(99,102,241,.88)';
            } else {
              el.options.backgroundColor = gradient;
            }
            el.options.borderWidth   = 0;
            el.options.borderSkipped = false;
            if (preserveDatasetColors) {
              var hasVisibleSegmentAbove = false;
              for (var k = i + 1; k < metas.length; k++) {
                var aboveDataset = chart.data.datasets[k];
                if (!aboveDataset || (chart.isDatasetVisible && !chart.isDatasetVisible(k))) continue;
                var aboveValue = Number((aboveDataset.data || [])[j] || 0);
                if (aboveValue > 0) {
                  hasVisibleSegmentAbove = true;
                  break;
                }
              }
              el.options.borderRadius = hasVisibleSegmentAbove
                ? 0
                : { topLeft: 7, topRight: 7, bottomLeft: 0, bottomRight: 0 };
            } else {
              el.options.borderRadius = 8;
            }
          }
        }
      }
    });
  }

  /* ── Re-aplicar defaults cuando cambie el tema ── */
  function watchTheme() {
    var el = document.documentElement;
    var obs = new MutationObserver(function () {
      applyChartDefaults();
    });
    obs.observe(el, { attributes: true, attributeFilter: ['class'] });
  }

  /* ── Inicializar cuando el DOM y Chart.js estén listos ── */
  document.addEventListener('DOMContentLoaded', function () {
    applyChartDefaults();
    registerV4Plugin();
    watchTheme();
  });

  /* Por si Chart.js cargó después de DOMContentLoaded */
  if (document.readyState !== 'loading') {
    applyChartDefaults();
    registerV4Plugin();
    watchTheme();
  }
})();
