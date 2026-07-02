import CatIllustration from './CatIllustration'
import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <h1>
            Hola, soy <span>Cristian</span>
          </h1>
          <p className="hero__tagline">
            Full Stack Developer en formación — construyo cosas simples,
            terminadas, y con criterio.
          </p>
          <a href="#contacto" className="btn">
            Hablemos
          </a>
          <div className="hero__socials">
            <a
              href="https://www.linkedin.com/in/cristian-david-ibarra-78967b328"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" aria-hidden="true">
                <use href="/icons.svg#linkedin-icon" />
              </svg>
            </a>
            <a
              href="https://github.com/Lambokkido"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg width="18" height="18" aria-hidden="true">
                <use href="/icons.svg#github-icon" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero__cat-wrap">
          <div className="hero__glow" />
          <CatIllustration size={300} />
        </div>
      </div>
    </section>
  )
}

export default Hero
