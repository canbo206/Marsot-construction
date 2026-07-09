import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          Marsot<span>Construction</span>
        </a>

        <nav className="navbar__links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="btn navbar__cta">
          Get a Free Estimate
        </a>
      </div>
    </header>
  )
}

export default Navbar
