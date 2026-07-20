import './Hero.css'

// Drop your hero photo in src/assets/hero/, then uncomment the line below.
// import heroBackground from '../assets/hero/hero-background.jpg'

const heroBackground = null

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
          Expert Painting &amp; Drywall Services in Seattle
        </h1>

        <p className="hero__subtitle">
          A family-owned crew serving homeowners and contractors across King and
          Snohomish County. We prep right, finish clean, and stand behind every job.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="btn">Get a Free Estimate</a>
        </div>

        <p className="hero__badge">Licensed &amp; Insured</p>
      </div>
    </section>
  )
}

export default Hero
