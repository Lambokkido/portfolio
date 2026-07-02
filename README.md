# Portfolio — Cristian David Ibarra

Sitio personal de una sola página construido con **React + Vite**, pensado para presentarme a reclutadores y hiring managers como evidencia de que puedo pensar y terminar un proyecto con criterio, no solo "saber código".

🔗 **Demo:** [portfolio-cristianibarra.vercel.app](https://portfolio-cristianibarra.vercel.app/)

## Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS plano (sin frameworks de UI), organizado por componente
- [Oxlint](https://oxc.rs/) para linting

## Estructura del proyecto

```
src/
  components/     Un componente + su .css por sección (Navbar, Hero, About, Projects, Contact, Footer)
  components/CatIllustration.jsx   Ilustración SVG propia (la gatita, motivo visual recurrente)
  data/projects.js                 Fuente de datos de los proyectos mostrados en la sección Proyectos
  App.jsx                          Composición de las secciones
```

## Cómo correrlo local

```bash
npm install
npm run dev       # http://localhost:5173
```

Otros scripts:

```bash
npm run build      # build de producción
npm run preview    # sirve el build localmente
npm run lint        # oxlint
```

## Agregar un proyecto nuevo

No hay backend ni panel de administración a propósito: los proyectos viven en `src/data/projects.js`. Para sumar uno, se agrega un objeto al array con `name`, `description`, `stack`, `repoUrl`, `demoUrl`, `tag` (`"Proyecto propio"` o `"Curso Angela Yu"`) e `image`. El componente `Projects` los renderiza automáticamente — no hace falta tocar nada más.

## Decisiones de diseño

El razonamiento detrás de cada decisión (una sola página vs. rutas, por qué no hay formulario de contacto, por qué no hay backend, la paleta de colores, etc.) está documentado en [`design-brief.md`](./design-brief.md).

## Deploy

Desplegado en [Vercel](https://vercel.com/), conectado al repo de GitHub: cada `git push` a `master` dispara un deploy automático.
