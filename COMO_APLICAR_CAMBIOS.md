# Cómo aplicar estos cambios

Estos cambios ya están hechos en el código. Si estás usando GitHub o un servidor, normalmente solo tienes que aceptar/mezclar el pull request y volver a subir o desplegar la carpeta del proyecto.

## Qué ha cambiado

- `index.html` carga ahora un único CSS principal de pantalla: `styles-v4.css`.
- `styles-v4.css` contiene las capas visuales anteriores consolidadas y queda como sistema visual principal.
- `styles-print.css` se mantiene separado solo para impresión.
- `app.src.jsx` vuelve a existir como archivo editable de la aplicación React.
- `app.bundle.js` queda como archivo generado automáticamente: no se debe editar a mano.

## Si necesitas cambiar la aplicación más adelante

1. Edita `app.src.jsx`.
2. Ejecuta:

```bash
./build-precompile.sh
```

3. Sube los cambios generados, incluido `app.bundle.js`.

## Si solo cambias estilos

Edita `styles-v4.css`. No hace falta tocar `app.bundle.js`.

## Si GitHub dice que hay conflictos

En este cambio es normal que GitHub marque conflicto en `app.src.jsx` y `app.bundle.js`, porque `app.bundle.js` se genera desde `app.src.jsx`.

La forma segura de resolverlo es:

1. En `app.src.jsx`, conserva la versión de la rama del pull request si quieres mantener la nueva barra lateral y las mejoras visuales.
2. No edites `app.bundle.js` a mano.
3. Después de resolver `app.src.jsx`, ejecuta:

```bash
./build-precompile.sh
```

4. Añade los dos archivos y confirma el merge:

```bash
git add app.src.jsx app.bundle.js
git commit
```

Si lo haces desde la pantalla de GitHub, en los dos conflictos pulsa **Accept current change** cuando `current` sea la rama `codex/...` del pull request con la barra lateral. Después marca los archivos como resueltos y confirma el merge.
