# Revisión v1 - Gestor de Proyectos Unitecnic

Cambios aplicados:

1. `app.bundle.js`
   - Añadido saneado básico de HTML en la Wiki antes de mostrar y guardar contenido.
   - Bloquea etiquetas peligrosas (`script`, `iframe`, `object`, `embed`, etc.).
   - Elimina atributos `on...` y enlaces `javascript:` / `data:text/html`.

2. `auth.js`
   - Añadido escape de errores mostrados con `innerHTML`.
   - Evita que un parámetro de error manipulado en la URL pueda inyectar HTML.

3. `importer.js`
   - Reescrito el importador XML de MS Project.
   - Valida errores de parseo XML.
   - Limita archivos a 10 MB.
   - Normaliza textos, fechas, porcentaje de avance y IDs.
   - Añade `PENDING_TS_KEY` y actualiza el indicador de sincronización.
   - Crea proyectos importados con la misma estructura extendida que el resto de la app.

Notas:
- `app.bundle.js` parece ser un archivo compilado. Lo ideal es recuperar y trabajar sobre `app.src.jsx`, porque `build-precompile.sh` depende de ese fichero y no está incluido en los archivos recibidos.
- Estos cambios son conservadores: no rediseñan la app ni cambian el backend.
