/* importer.js - Importador automático de MS Project */
(function() {
  window.importProjectFromXML = function() {
    // 1. Crear un input invisible temporalmente
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xml';
    
    input.onchange = function(e) {
      var file = e.target.files[0];
      if (!file) return;

      var reader = new FileReader();
      reader.onload = function(event) {
        try {
          // 2. Procesar el contenido del archivo
          var text = event.target.result;
          var parser = new DOMParser();
          var xmlDoc = parser.parseFromString(text, "text/xml");
          
          // Obtener datos del proyecto
          var projTitle = xmlDoc.getElementsByTagName("Title")[0]?.textContent || 
                          xmlDoc.getElementsByTagName("Name")[0]?.textContent || 
                          "Proyecto Importado";
          
          // Obtener tareas
          var xmlTasks = xmlDoc.getElementsByTagName("Task");
          var newTasks = [];
          
          for (var i = 0; i < xmlTasks.length; i++) {
            var xt = xmlTasks[i];
            var isNull = xt.getElementsByTagName("IsNull")[0]?.textContent === "1";
            var isSummary = xt.getElementsByTagName("Summary")[0]?.textContent === "1";
            var name = xt.getElementsByTagName("Name")[0]?.textContent;
            
            // Filtramos carpetas y tareas vacías
            if (!isNull && !isSummary && name) {
              var start = (xt.getElementsByTagName("Start")[0]?.textContent || "").split('T')[0];
              var finish = (xt.getElementsByTagName("Finish")[0]?.textContent || "").split('T')[0];
              var notes = xt.getElementsByTagName("Notes")[0]?.textContent || "";
              var pct = parseInt(xt.getElementsByTagName("PercentComplete")[0]?.textContent || "0");
              
              var estado = "Pendiente";
              if (pct === 100) estado = "Completado";
              else if (pct > 0) estado = "En Curso";

              newTasks.push({
                id: 'imp_' + (xt.getElementsByTagName("UID")[0]?.textContent || Math.random()),
                area: "Ingeniería", // Área por defecto
                tarea: name,
                estado: estado,
                detalles: notes,
                fechaInicio: start,
                fechaLimite: finish,
                iconType: "monitor",
                subtasks: []
              });
            }
          }

          if (newTasks.length === 0) {
            alert("No se encontraron tareas válidas en el archivo XML.");
            return;
          }

          // 3. Crear el objeto Proyecto compatible con tu App
          var newProject = {
            id: 'local_' + Date.now(),
            meta: {
              titulo: projTitle,
              subtitulo: "Importado de MS Project",
              cliente: "Sin cliente",
              estado: "En Ejecución",
              responsableProyecto: "",
              pep: ""
            },
            tasks: newTasks,
            audit: { activity: [], comments: [] }
          };

          // 4. Guardar directamente en el navegador y recargar
          // Esto evita tener que modificar la lógica compleja de React
          var currentProjects = JSON.parse(localStorage.getItem('unitecnic_projects') || '[]');
          currentProjects.push(newProject);
          localStorage.setItem('unitecnic_projects', JSON.stringify(currentProjects));

          // Forzamos sincronización pendiente si usas AWS
          localStorage.setItem('unitecnic_projects_pending', JSON.stringify(currentProjects));
          
          alert("Proyecto importado correctamente: " + projTitle + "\n(" + newTasks.length + " tareas). La página se recargará.");
          window.location.reload();

        } catch (err) {
          console.error(err);
          alert("Error al leer el archivo XML. Asegúrate de que es un archivo válido de Project.");
        }
      };
      reader.readAsText(file);
    };

    // Activar el selector de archivos
    input.click();
  };
})();