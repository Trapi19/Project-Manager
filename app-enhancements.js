/* =========================================================
   MEJORAS V3 DE COMPORTAMIENTO / HARDENING
   ---------------------------------------------------------
   Archivo no intrusivo: no modifica la estructura de datos ni
   sustituye componentes React. Añade pequeñas protecciones y
   mejoras de experiencia alrededor de la app existente.
   ========================================================= */
(function () {
  'use strict';

  var PENDING_KEY = 'unitecnic_projects_pending';
  var ERROR_TOAST_ID = 'gp-runtime-error-toast';

  function hasPendingChanges() {
    try { return !!localStorage.getItem(PENDING_KEY); }
    catch (e) { return false; }
  }

  function createToast(message, tone) {
    var previous = document.getElementById(ERROR_TOAST_ID);
    if (previous) previous.remove();

    var el = document.createElement('div');
    el.id = ERROR_TOAST_ID;
    el.className = 'no-print';
    el.setAttribute('role', 'status');
    el.style.position = 'fixed';
    el.style.right = '16px';
    el.style.bottom = '16px';
    el.style.zIndex = '10000';
    el.style.maxWidth = '360px';
    el.style.padding = '12px 14px';
    el.style.borderRadius = '18px';
    el.style.boxShadow = '0 20px 55px rgba(0,0,0,.22)';
    el.style.backdropFilter = 'blur(16px)';
    el.style.fontFamily = 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif';
    el.style.fontSize = '13px';
    el.style.lineHeight = '1.35';
    el.style.color = '#fff';
    el.style.background = tone === 'warn' ? 'rgba(217,119,6,.92)' : 'rgba(15,23,42,.92)';
    el.textContent = message;
    document.body.appendChild(el);

    window.setTimeout(function () {
      if (el && el.parentNode) el.remove();
    }, 6500);
  }

  // Evita que arrastrar un archivo accidentalmente sobre la página reemplace la app.
  // El importador ya tiene su propio input; este bloqueo protege la sesión del usuario.
  ['dragover', 'drop'].forEach(function (eventName) {
    window.addEventListener(eventName, function (event) {
      var dt = event.dataTransfer;
      if (!dt || !dt.files || dt.files.length === 0) return;
      var target = event.target;
      var isFileInput = target && target.tagName === 'INPUT' && target.type === 'file';
      if (!isFileInput) {
        event.preventDefault();
        if (eventName === 'drop') createToast('Usa los botones de Importar para cargar archivos. Así evitas sobrescribir la página por accidente.', 'warn');
      }
    });
  });

  // Aviso antes de cerrar si hay cambios pendientes de sincronizar con AWS.
  // No molesta cuando todo está sincronizado.
  window.addEventListener('beforeunload', function (event) {
    if (!hasPendingChanges()) return;
    event.preventDefault();
    event.returnValue = '';
  });

  // Clase de arranque para CSS progresivo y diagnóstico visual.
  document.documentElement.classList.add('gp-js-ready');
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('gp-reduced-motion');
  }

  // Los errores de runtime no deben quedar ocultos al usuario.
  // Se muestra un aviso corto y se conserva el detalle en consola.
  window.addEventListener('error', function (event) {
    if (!event || !event.message) return;
    createToast('La aplicación ha detectado un error de interfaz. Revisa la consola o recarga si algo no responde.', 'error');
  });

  window.addEventListener('unhandledrejection', function () {
    createToast('Una operación no se ha completado correctamente. Comprueba conexión y sincronización.', 'warn');
  });
})();
