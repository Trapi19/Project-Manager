# Gestor de Proyectos

Aplicación web (frontend) para la gestión visual de proyectos por estados, con UI basada en React (UMD/CDN) y estilos híbridos (Tailwind vía CDN + CSS propio). Incluye soporte de modo oscuro y componentes auxiliares (p. ej., Gantt con frappe-gantt).

---

## Ejecución rápida

Este proyecto es estático (HTML/CSS/JS). Puedes abrir `index.html` directamente, pero se recomienda usar un servidor local para evitar restricciones del navegador con algunos recursos.

### Opción A: Python
```bash
python3 -m http.server 5173
```
Abrir: `http://localhost:5173`

### Opción B: Node (serve)
```bash
npx serve . -l 5173
```
Abrir: `http://localhost:5173`

---

## Tecnologías

- React 18 y ReactDOM cargados desde CDN (UMD)
- TailwindCSS desde CDN (utilidades rápidas)
- CSS propio para tokens, superficies, sombras, formularios, estados y modo impresión
- Font Awesome (iconografía)
- frappe-gantt (estilos y librería UMD)

---

## Estructura del repositorio

Archivos principales:

- `index.html`  
  Punto de entrada. Monta `<div id="root"></div>` y carga scripts y estilos.
- `app.bundle.js`  
  Bundle principal (JS transpileado desde JSX).
- `app.js`  
  Helpers globales (p. ej., formateo de fechas).
- `assets.js`  
  Recursos incrustados (p. ej., logo en base64).
- Estilos:
  - `styles-base.css` (tokens globales, superficies, tipografía, tema claro/oscuro)
  - `styles-dashboard.css` (layout y tarjetas del dashboard)
  - `styles-forms.css` (formularios y controles)
  - `styles-states.css` (estilos por estado: acentos, sombras, bordes)
  - `styles-print.css` (modo impresión)

---

## Modo oscuro

El modo oscuro se activa aplicando la clase `theme-dark` al elemento `<html>`.

La preferencia se persiste en `localStorage` con la clave:
- `gp_theme`: `"light"` o `"dark"`

Ejemplo manual (consola del navegador):
```js
localStorage.setItem("gp_theme", "dark");
location.reload();
```

Para volver a claro:
```js
localStorage.setItem("gp_theme", "light");
location.reload();
```

---

## Arquitectura CSS y convención BEM

### Capas de CSS (recomendado)

1. Tokens y base: `styles-base.css`
2. Layout/UI: `styles-dashboard.css`, `styles-forms.css`
3. Estados: `styles-states.css`
4. Impresión: `styles-print.css`

Esta separación evita acoplamientos y facilita mantener el diseño sin regresiones.

### Estados: tokenización de colores (centralizado)

Para que los colores de estado sean configurables sin tocar reglas duplicadas:

- Los tokens se definen en `styles-base.css` dentro de `:root`.
- `styles-states.css` consume esos tokens con `rgba(var(--token-rgb), alpha)` para mantener exactamente el mismo look (bordes, sombras, glow).
- Si fuese necesario ajustar el modo oscuro, se pueden sobreescribir tokens dentro de `.theme-dark` en `styles-base.css`.

Convención de tokens recomendada:
- `--color-ejecucion-rgb`
- `--color-completado-rgb`
- `--color-revision-rgb`
- `--color-pausa-rgb`

Ejemplo típico de uso:
```css
.section-tapiz.section--ejecucion {
  border-color: rgba(var(--color-ejecucion-rgb), 0.68) !important;
  box-shadow: var(--shadow-elev-2),
              0 0 0 1px rgba(var(--color-ejecucion-rgb), 0.18) inset,
              0 0 22px rgba(var(--color-ejecucion-rgb), 0.08);
}
```

### Nomenclatura BEM para secciones por estado

Para mantener consistencia con el resto del proyecto, las secciones de estado siguen este patrón:

- Antes: `.section-estado-ejecucion`
- Ahora: `.section--ejecucion`

Estados soportados:
- `.section--ejecucion`
- `.section--completado`
- `.section--revision`
- `.section--pausa`

Notas:
- No debe cambiar el diseño: backdrop-filter, sombras y bordes deben permanecer intactos.
- `styles-states.css` debería limitarse a reglas de acento por estado, sin duplicar layout.

---

## Build del bundle (opcional)

Si el repositorio incluye fuente JSX, el script:
- `build-precompile.sh`
permite transpilar JSX → JS y generar `app.bundle.js` usando el compilador de TypeScript (solo como transpiler).

### Requisitos
- bash
- tsc disponible en PATH

Instalación rápida de TypeScript:
```bash
npm i -g typescript
# o dentro del repo:
npm i -D typescript
npx tsc --version
```

### Ejecutar build
```bash
./build-precompile.sh
```

Salida esperada:
- `app.bundle.js` actualizado

---

## Contribución

Flujo recomendado:
1. Crear rama desde `main`
2. Cambios pequeños y focalizados
3. PR con descripción clara (qué, por qué, impacto)
4. Verificación manual en navegador (tema claro/oscuro y estados)

Checklist mínima antes de PR:
- No hay regresión visual (sombras/bordes/backdrop-filter se mantienen)
- El modo oscuro sigue funcionando (`.theme-dark`)
- Las clases BEM de estado coinciden entre DOM y CSS
- No se duplican valores de color (usar tokens)

---

## Licencia

Pendiente de definir.
Si el repositorio es interno, especificar el uso permitido y el propietario del código.
