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
