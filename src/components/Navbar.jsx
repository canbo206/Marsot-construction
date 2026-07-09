import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          Marsot<span>Construction</span>
        </Link>

        <nav className="navbar__links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/contact" className="btn navbar__cta">
          Get a Free Estimate
        </Link>
      </div>
    </header>
  )
}

export default Navbar