# Gestor de Proyectos - Cambios V3

Esta versión aplica un rediseño visual amplio y varias mejoras pequeñas de robustez sin cambiar el modelo de datos ni la integración con AWS/Cognito.

## Archivos añadidos

### `styles-overhaul.css`
Capa de rediseño visual cargada al final del `<head>`.

Cambios de diseño:
- Nuevo sistema visual V3 con variables propias: radios, sombras, bordes, superficies translúcidas y foco accesible.
- Dashboard con cabecera tipo panel premium, efecto glass y mejor jerarquía visual.
- Resumen ejecutivo rediseñado como centro de control: tarjetas más claras, mayor contraste y mejor distribución en escritorio.
- Tarjetas de proyecto más modernas, con borde lateral por estado, mejor elevación y CTA más visible.
- Secciones por estado más ordenadas: paneles menos ruidosos y encabezados con separación clara.
- Formularios, buscadores y filtros con foco consistente y mejor lectura en modo claro/oscuro.
- Tablas con cabecera fija, mejor espaciado y hover más suave.
- Vistas Workload, Alertas y Gráficas integradas en el mismo lenguaje visual.
- Modales y popovers más consistentes.
- Mejoras responsive para móvil.
- Respeto de `prefers-reduced-motion` para usuarios que prefieren menos animación.

### `app-enhancements.js`
Capa de pequeñas mejoras de comportamiento no intrusivas.

Cambios de programación/robustez:
- Bloquea el arrastre accidental de archivos sobre la página para evitar que el navegador sustituya la app por el archivo soltado.
- Avisa antes de cerrar la pestaña si hay cambios pendientes de sincronizar con AWS.
- Añade clase `gp-js-ready` al documento para futuras mejoras progresivas.
- Añade clase `gp-reduced-motion` si el sistema del usuario pide menos movimiento.
- Muestra un aviso discreto si se produce un error de runtime o una promesa rechazada.

## Archivos modificados

### `index.html`
- Se añade `styles-overhaul.css?v=3` después del CSS existente.
- Se añade `app-enhancements.js?v=3` después de `app.bundle.js`.
- Se actualizan versiones `?v=3` en scripts y CSS propios para evitar que el navegador o Amplify sirvan caché antigua.

### `app.js`
- Se reescribe el indicador de sincronización para dejar de usar `innerHTML`.
- Ahora usa `replaceChildren()`, `textContent` y nodos DOM reales.
- Se mantiene la misma API pública: `window.gpSetSyncStatus(status)`.
- Se añade temporizador controlado para ocultar el estado `Sincronizado` sin pisar estados posteriores.

## Archivos no modificados a propósito

### `app.bundle.js`
No se ha modificado en esta versión porque es el bundle principal compilado. Es mejor no tocarlo salvo que tengamos el fuente `app.src.jsx`. El script `build-precompile.sh` indica que el flujo ideal sería compilar desde `app.src.jsx`, pero ese archivo no está incluido en el paquete actual.

### `auth.js`, `importer.js`, `assets.js`
Se mantienen tal como estaban en la versión subida, porque ya contenían las mejoras anteriores de seguridad básica e importación revisada.

## Cómo subirlo

1. Copia todos los archivos de esta carpeta encima de tu repositorio local.
2. Ejecuta:

```bash
git status
git add .
git commit -m "Rediseñar interfaz y añadir mejoras de robustez V3"
git push origin main
```

Amplify debería desplegar automáticamente cuando reciba el commit en `main`.

## Cómo revertir solo el rediseño

Para desactivar el rediseño sin tocar la app, elimina esta línea de `index.html`:

```html
<link rel="stylesheet" href="styles-overhaul.css?v=3" />
```

Para desactivar las mejoras de comportamiento, elimina esta línea de `index.html`:

```html
<script src="app-enhancements.js?v=3"></script>
```
