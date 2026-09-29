import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo/logoSquare.webp'

function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <Link to="/about" className="navbar__left-link" onClick={close}>
        About Us
      </Link>

      <Link to="/" className="navbar__logo" onClick={close}>
        Marsot
        <img src={logo} alt="Marsot Construction logo" className="navbar__logo-img" />
        <span>Construction</span>
      </Link>

      {/* Always visible on every viewport, unlike navbar__menu below which
          collapses behind the hamburger on mobile — a visitor should never
          have to open the menu just to find a way to call. */}
      <div className="navbar__right">
        {/* Full number on desktop; shrinks to just a call icon below 1060px
            (see Navbar.css) since there isn't room for the text next to the
            centered logo — the number itself is still in the aria-label. */}
        <a
          href="tel:+14252690118"
          className="navbar__phone"
          aria-label="Call Marsot Construction at (425) 269-0118"
        >
          <span className="navbar__phone-icon" aria-hidden="true">📞</span>
          <span className="navbar__phone-text">(425) 269-0118</span>
        </a>

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
            {/* Only shown once the standalone "About Us" link above is hidden
                (below 1060px) so it never appears twice. */}
            <Link to="/about" className="navbar__menu-about" onClick={close}>
              About Us
            </Link>
            <a href="/#services" onClick={close}>Services</a>
            <Link to="/gallery" onClick={close}>Gallery</Link>
            <a href="/#contact" onClick={close}>Contact</a>
          </nav>

          <a href="/#contact" className="btn navbar__cta" onClick={close}>
            Get a Free Estimate
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
