# CLAUDE.md — Portfolio de Cristian Ibarra

## Qué es este proyecto

Portfolio personal de una sola página (React + Vite) para buscar el primer trabajo como developer en relación de dependencia. El objetivo no es solo mostrar código, sino evidenciar criterio: mejor algo simple y terminado que algo ambicioso a medias.

- El **porqué** de cada decisión de producto/diseño (por qué SPA sin rutas, por qué sin formulario de contacto, por qué sin backend, paleta de colores, etc.) está en [`design-brief.md`](./design-brief.md) — leerlo antes de proponer cambios de alcance o de diseño.
- Cómo correr el proyecto, stack, y estructura de carpetas están en [`README.md`](./README.md).

## Stack y estructura (resumen)

- React 19 + Vite, CSS plano por componente (sin frameworks de UI).
- Sin backend a propósito, en ningún lado del sitio (ni contacto ni proyectos) — es una decisión deliberada, no una limitación a resolver.
- `src/data/projects.js`: fuente de datos de la sección Proyectos. Agregar un proyecto = agregar un objeto ahí, no requiere tocar componentes.
- `public/icons.svg`: sprite SVG propio con `fill="currentColor"`, referenciado con `<use>` en `Hero.jsx` y `Contact.jsx`. Así el color/hover de los íconos se resuelve con CSS en el link contenedor, sin duplicar SVGs.
- `src/components/CatIllustration.jsx`: ilustración SVG de línea propia (gata negra con contorno durazno), motivo visual recurrente del sitio — representa a la gata de Cristian, es un detalle con significado personal, no un ícono genérico.

## Estado actual (dónde quedamos)

- Todas las secciones están completas y wireadas en `App.jsx`: Navbar, Hero, About, Projects, Contact, Footer, más `CatIllustration`.
- Links reales de LinkedIn (`cristian-david-ibarra-78967b328`) y GitHub (`Lambokkido`) ya conectados en Hero y Contact, con íconos SVG (ver arriba) y hover a color durazno.
- Git inicializado con 3 commits en capas:
  1. `chore: initialize Vite + React scaffold`
  2. `feat: build portfolio sections and cat illustration`
  3. `docs: add README and design brief`
  Sin remoto configurado todavía.
- `.gitignore` excluye `.claude/` (config local de un agente usado para planificar el proyecto, no es parte del sitio) además del boilerplate estándar de Vite.
- Se sacaron del proyecto por innecesarios (ya no existen en disco): `preview-hero.html` (boceto HTML pre-React del Hero) y `src/assets/` (carpeta vacía del scaffold de Vite).

## Pendientes conocidos

- Commitear el ajuste de `.gitignore` (la línea de `preview-hero.html` quedó sin commitear tras borrar el archivo).
- Agregar la captura de pantalla del proyecto portfolio en `src/data/projects.js` (hoy `image: null`).
- Crear/conectar el remoto de GitHub (`https://github.com/Lambokkido/portfolio`) y hacer el primer push.
- Deploy en Vercel (decidido en el brief, todavía no hecho).

## Documento personal (fuera del repo)

Existe un PDF de referencia para entrevistas — **"Portfolio - Por que de cada decision.pdf"** en el Escritorio de Cristian — que explica el porqué de cada decisión en un formato pensado para que él se lo explique a un entrevistador. Se genera a partir de un HTML fuente que vive en el scratchpad de la sesión de Claude Code (no versionado en este repo). Si se toman decisiones nuevas relevantes para una entrevista, ese PDF se puede regenerar agregando una sección nueva al HTML fuente y reimprimiéndolo.
