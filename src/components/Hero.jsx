import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
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
          <a href="tel:+14252690118" className="hero__phone">
            Call (425) 269-0118
          </a>
        </div>

        <p className="hero__badge">Licensed &amp; Insured</p>
      </div>
    </section>
  )
}

export default Hero
