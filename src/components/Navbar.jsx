import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__brand">
          Cristian Ibarra
        </a>
        <div className="navbar__links">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
