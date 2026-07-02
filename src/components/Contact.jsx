import CatIllustration from './CatIllustration'
import './Contact.css'

function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="container contact__grid">
        <div className="contact__text">
          <h2>Contacto</h2>
          <p>
            ¿Querés charlar sobre alguna oportunidad? Escribime, te respondo
            a la brevedad.
          </p>
          <a href="mailto:cristiandavidibarra98@gmail.com" className="btn">
            Enviar un mail
          </a>
          <div className="contact__socials">
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

        <div className="contact__cat-wrap">
          <CatIllustration size={160} />
        </div>
      </div>
    </section>
  )
}

export default Contact
