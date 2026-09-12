import './Hero.css'
import { LICENSE_NUMBER } from '../data/business'

// Drop your hero photo in src/assets/hero/, then uncomment the line below.
// Note: filename casing must match the on-disk file exactly — see the same
// note in data/services.js.
import heroBackground from '../assets/hero/hero-Background.jpg'


function Hero() {
  const hasBackground = Boolean(heroBackground)

  return (
    <section
      id="home"
      className={`hero page-section${hasBackground ? ' hero--has-image' : ''}`}
      style={
        hasBackground
          ? { backgroundImage: `url(${heroBackground})` }
          : undefined
      }
    >
      {hasBackground && <div className="hero__overlay" aria-hidden="true" />}

      <div className="container hero__inner">
        <p className="hero__eyebrow">Painting &amp; Drywall · Greater Seattle</p>

        <h1 className="hero__title">
          Painting &amp; Drywall Services in Seattle
        </h1>

        <p className="hero__subtitle">
          Straightforward painting and drywall work for homeowners and
          contractors across the greater Seattle area. Proper prep, clean
          execution, no surprises.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="btn">Get a Free Estimate</a>
        </div>

        <p className="hero__badge">
          Licensed &amp; Insured{LICENSE_NUMBER && ` · ${LICENSE_NUMBER}`}
        </p>
      </div>
    </section>
  )
}

export default Hero
