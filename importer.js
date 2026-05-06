/* importer.js - Importador automático de MS Project, versión revisada */
(function () {
  'use strict';

  var PROJECTS_KEY = 'unitecnic_projects';
  var PENDING_KEY = 'unitecnic_projects_pending';
  var PENDING_TS_KEY = 'unitecnic_projects_pending_ts';
  var MAX_XML_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB

  function textOf(parent, tag, fallback) {
    var el = parent.getElementsByTagName(tag)[0];
    var value = el && typeof el.textContent === 'string' ? el.textContent.trim() : '';
    return value || fallback || '';
  }

  function isoDateFromProject(value) {
    var raw = String(value || '').trim();
    if (!raw) return '';
    var match = raw.match(/^(\d{4}-\d{2}-\d{2})/);
    return match ? match[1] : '';
  }

  function safeText(value, maxLength) {
    var out = String(value || '').replace(/[\u0000-\u001F\u007F]/g, ' ').trim();
    if (maxLength && out.length > maxLength) return out.slice(0, maxLength).trim();
    return out;
  }

  function parsePercent(value) {
    var pct = parseInt(value, 10);
    if (!Number.isFinite(pct)) return 0;
    return Math.max(0, Math.min(100, pct));
  }

  function readProjectsFromStorage() {
    try {
      var parsed = JSON.parse(localStorage.getItem(PROJECTS_KEY) || '[]');
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function saveProjectsToStorage(projects) {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
    localStorage.setItem(PENDING_KEY, JSON.stringify(projects));
    localStorage.setItem(PENDING_TS_KEY, String(Date.now()));
    if (window.gpSetSyncStatus) window.gpSetSyncStatus('pending');
  }

  function parseProjectXml(text) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(text, 'text/xml');
    var parserError = xmlDoc.getElementsByTagName('parsererror')[0];
    if (parserError) throw new Error('El XML no es válido.');

    var projectNode = xmlDoc.getElementsByTagName('Project')[0] || xmlDoc;
    var projTitle = safeText(textOf(projectNode, 'Title') || textOf(projectNode, 'Name') || 'Proyecto Importado', 120);
    var xmlTasks = xmlDoc.getElementsByTagName('Task');
    var newTasks = [];

    for (var i = 0; i < xmlTasks.length; i++) {
      var xt = xmlTasks[i];
      var isNull = textOf(xt, 'IsNull') === '1';
      var isSummary = textOf(xt, 'Summary') === '1';
      var name = safeText(textOf(xt, 'Name'), 180);
      if (isNull || isSummary || !name) continue;

      var uid = safeText(textOf(xt, 'UID') || String(i + 1), 40).replace(/[^a-zA-Z0-9_-]/g, '_');
      var pct = parsePercent(textOf(xt, 'PercentComplete') || '0');
      var estado = pct === 100 ? 'Completado' : (pct > 0 ? 'En Curso' : 'Pendiente');
      var notes = safeText(textOf(xt, 'Notes'), 2000);

      newTasks.push({
        id: 'imp_' + Date.now() + '_' + uid,
        area: 'Ingeniería',
        tarea: name,
        estado: estado,
        prioridad: 'Media',
        detalles: notes,
        fechaInicio: isoDateFromProject(textOf(xt, 'Start')),
        fechaLimite: isoDateFromProject(textOf(xt, 'Finish')),
        iconType: 'monitor',
        subtasks: []
      });
    }

    if (newTasks.length === 0) throw new Error('No se encontraron tareas válidas en el XML.');

    return {
      id: 'local_' + Date.now(),
      meta: {
        titulo: projTitle,
        subtitulo: 'Importado de MS Project',
        cliente: 'Sin cliente',
        clientLogoData: '',
        empresa: 'UNITECNIC',
        estado: 'En Ejecución',
        responsableProyecto: '',
        ejecutorProyecto: '',
        pep: '',
        sharepointUrl: ''
      },
      wiki: { content: '' },
      tasks: newTasks,
      audit: {
        activity: [{
          id: 'e_' + Date.now(),
          ts: Date.now(),
          user: 'Importador MS Project',
          type: 'import',
          message: 'Proyecto importado desde XML con ' + newTasks.length + ' tareas.'
        }],
        comments: []
      }
    };
  }

  window.importProjectFromXML = function () {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xml,text/xml,application/xml';

    input.onchange = function (e) {
      var file = e.target.files && e.target.files[0];
      if (!file) return;
      if (file.size > MAX_XML_SIZE_BYTES) {
        alert('El XML es demasiado grande. Límite: 10 MB.');
        return;
      }

      var reader = new FileReader();
      reader.onload = function (event) {
        try {
          var text = String(event.target.result || '');
          var newProject = parseProjectXml(text);
          var currentProjects = readProjectsFromStorage();
          currentProjects.push(newProject);
          saveProjectsToStorage(currentProjects);
          alert('Proyecto importado correctamente: ' + newProject.meta.titulo + '\n(' + newProject.tasks.length + ' tareas). La página se recargará.');
          window.location.reload();
        } catch (err) {
          console.error(err);
          alert((err && err.message) ? err.message : 'Error al leer el archivo XML. Asegúrate de que es un archivo válido de Project.');
        } finally {
          input.value = '';
        }
      };
      reader.onerror = function () {
        alert('No se ha podido leer el archivo XML.');
      };
      reader.readAsText(file);
    };

    input.click();
  };
})();
