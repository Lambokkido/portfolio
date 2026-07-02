# Design Brief - Portfolio

## Objetivo
Conseguir el primer trabajo como developer en relación de dependencia. El portfolio debe funcionar como evidencia de que Cristian piensa y termina proyectos con criterio, no solo que "sabe código" — filosofía guía: mejor algo simple y pulido que algo ambicioso a medio terminar.

## Público objetivo
- Principal: reclutadores/talent de RRHH (revisión rápida, poco tiempo, no siempre técnicos).
- Secundario: algún dev/hiring manager que revise con más detalle.

## Secciones y contenido
Sitio de **una sola página** con scroll suave entre secciones (navbar con links ancla, no rutas separadas — más rápido de terminar bien para esta v1).

1. **Hero**: nombre, título/tagline corto, botón de contacto, íconos de redes.
2. **Sobre mí**: texto que cuenta quién es Cristian, su formación (curso Full Stack de Angela Yu) y menciona las tecnologías que conoce en el propio relato (sin sección de skills separada — las tecnologías concretas quedan respaldadas en cada proyecto). Sin foto personal (la cara queda disponible vía LinkedIn).

  **Texto definitivo:**

  > Soy Cristian David Ibarra, de Buenos Aires. Mi primer contacto con la programación fue en la escuela técnica, aprendiendo MySQL y PHP — una experiencia que en su momento no me convenció. Años después volví a intentarlo por otro camino, con el Bootcamp Full Stack de Angela Yu, y esta vez fue distinto: encontré en el desarrollo algo que realmente me gusta y en lo que quiero seguir creciendo.
  >
  > Antes de esto trabajé 5 años y medio en una empresa de seguridad, atendiendo al público, coordinando novedades con clientes y personal externo, y resolviendo situaciones de presión con calma y criterio — habilidades que hoy también aplico a la forma en que encaro cada proyecto: prefiero algo simple y bien terminado antes que algo ambicioso a medias.
  >
  > Tengo un nivel de inglés intermedio-avanzado (B1-B2), y a futuro me gustaría seguir formándome en áreas como ciberseguridad o análisis de datos.
  >
  > En mis tiempos libres estoy con mis mascotas: mis gatos Anama Ferreira y Catriel (los dos rescatados de la calle) y mis perros Soni, Paul, Luli y Karin, con quienes se llevan de maravilla. Los quiero muchísimo.
3. **Proyectos**: 4-6 proyectos en tarjetas con overlay (captura + descripción + stack usado + links a GitHub/demo), mezclando proyectos del curso y propios, distinguidos con un tag/etiqueta chica (ej. "Proyecto propio" / "Curso Angela Yu"). El portfolio en sí se incluye como un proyecto más.
4. **Contacto**: sin formulario (evita necesitar backend/servicio de envío de mails). Mail (`mailto:`) como link directo, más íconos de redes (LinkedIn, GitHub). Sin WhatsApp — Cristian prefiere mantener ese número como algo personal.

## Proyectos a destacar
- Pendiente de definir cuáles concretamente (ver Preguntas abiertas).
- El propio sitio portfolio va como uno de los proyectos mostrados.

## Tono / estilo visual
- Referencia: https://abhicodestudio.com/ (capturas guardadas por el usuario en `Escritorio/Portfolio de referencia/`).
- Paleta oscura y tranquila: fondo azul marino (navy) + un único color de acento **durazno** (`#FFD3AC`) para botones, links, y el contorno/detalles de la ilustración. Nada de multicolor. (Se descartó el celeste/turquesa original en favor del durazno, elegido para que combine con la gatita.)
- Sin toggle dark/light (se descarta para simplificar el alcance de la v1).
- Ilustraciones tipo line-art (dibujo de línea simple) en vez de fotos stock — en vez del "hombrecito" del sitio de referencia, usar una **gatita negra** como motivo visual recurrente (hero / contacto), para darle identidad propia. Representa a Anama Ferreira, la gata de Cristian — no es solo un detalle estético, tiene un significado personal importante para él. Estilo: cuerpo sólido negro con contorno/resplandor durazno (para que se destaque sobre el fondo navy sin perder el negro) y ojos grandes blancos inspirados en Jiji (de Kiki's Delivery Service), pero como diseño propio y simplificado, no una copia del personaje.
- Tarjetas de proyecto con overlay oscuro al estilo de la referencia.

## MVP vs. fase 2
**MVP (esta versión):**
- Una sola página, scroll suave, navbar con anclas.
- Secciones: Hero, Sobre mí, Proyectos (4-6), Contacto.
- Sin formulario de contacto, sin toggle dark/light, sin foto personal.

**Fase 2 (posibles mejoras futuras):**
- Migrar a páginas/rutas separadas por sección (practicar routing, ej. React Router).
- Agregar toggle dark/light.
- Páginas de detalle individual por proyecto.

## Decisiones técnicas
- **Stack**: React + Vite. Cristian ya vio React en el curso de Angela Yu (módulos finales del Full Stack Bootcamp), así que no es tecnología nueva, y sirve como evidencia real de skill para reclutadores.
- **Deploy**: Vercel. Config automática para proyectos Vite/React, deploy en cada push, dominio propio disponible a futuro sin costo.
- **Sección de proyectos — Opción A (sin backend)**: los proyectos viven en un archivo de datos dentro del código (ej. `proyectos.js`, un objeto por proyecto con nombre, descripción, stack, links). El componente de tarjetas lee esa lista y las genera automáticamente. Agregar un proyecto nuevo = editar ese archivo + `git push` (Vercel redeploya solo). Se descartó a propósito un panel de administración con backend/base de datos (Supabase/Firebase) por sumar complejidad innecesaria (auth, hosting extra, llamadas a API) para una v1 — mantiene la misma filosofía "sin backend" que ya se usó para descartar el formulario de contacto.
- **Sin proyectos terminados aún**: Cristian está recién empezando a hacer proyectos propios. El sitio arranca con el portfolio mismo como primer proyecto mostrado, y la sección está armada para poder sumar proyectos reales a medida que se terminen — no hace falta esperar a tener 4-6 para lanzar la v1.

## Preguntas abiertas
Ninguna — planeamiento completo. Listo para pasar a implementación (armar el esqueleto del proyecto en React + Vite).
