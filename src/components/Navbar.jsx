import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <Link to="/about" className="navbar__left-link" onClick={close}>
        About Us
      </Link>

      <Link to="/" className="navbar__logo" onClick={close}>
        Marsot<span>Construction</span>
      </Link>

      <button
        type="button"
        className={`navbar__toggle ${open ? 'is-open' : ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="navbar-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="navbar__bar" />
        <span className="navbar__bar" />
        <span className="navbar__bar" />
      </button>

      <div id="navbar-menu" className={`navbar__menu ${open ? 'is-open' : ''}`}>
        <nav className="navbar__links">
          <a href="/#services" onClick={close}>Services</a>
          <Link to="/gallery" onClick={close}>Gallery</Link>
          <a href="/#contact" onClick={close}>Contact</a>
        </nav>

        <a href="/#contact" className="btn navbar__cta" onClick={close}>
          Get a Free Estimate
        </a>
      </div>
    </header>
  )
}

export default Navbar
