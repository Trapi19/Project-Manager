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
