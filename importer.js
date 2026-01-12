/* importer.js - Importador v2 (Sin recarga) */
(function() {
  // Ahora aceptamos una función "callback" para devolver el resultado
  window.importProjectFromXML = function(callback) {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xml';
    
    input.onchange = function(e) {
      var file = e.target.files[0];
      if (!file) return;

      var reader = new FileReader();
      reader.onload = function(event) {
        try {
          var text = event.target.result;
          var parser = new DOMParser();
          var xmlDoc = parser.parseFromString(text, "text/xml");
          
          var projTitle = xmlDoc.getElementsByTagName("Title")[0]?.textContent || 
                          xmlDoc.getElementsByTagName("Name")[0]?.textContent || 
                          "Proyecto Importado";
          
          var xmlTasks = xmlDoc.getElementsByTagName("Task");
          var newTasks = [];
          
          for (var i = 0; i < xmlTasks.length; i++) {
            var xt = xmlTasks[i];
            var isNull = xt.getElementsByTagName("IsNull")[0]?.textContent === "1";
            var isSummary = xt.getElementsByTagName("Summary")[0]?.textContent === "1";
            var name = xt.getElementsByTagName("Name")[0]?.textContent;
            
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
                area: "Ingeniería",
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
            alert("No se encontraron tareas válidas.");
            return;
          }

          var newProject = {
            id: 'imp_' + Date.now(),
            __isDraft: true, // Esto hace que se abra en modo edición
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

          // MAGIA: En vez de guardar y recargar, ejecutamos el callback
          if (callback && typeof callback === 'function') {
            callback(newProject);
          }

        } catch (err) {
          console.error(err);
          alert("Error al procesar el XML.");
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };
})();