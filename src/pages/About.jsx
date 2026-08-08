import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <article className="about">
      <header className="about__hero">
        <div className="container">
          <Link to="/" className="about__back">
            ← Back to Home
          </Link>
          <h1>About Us</h1>
          <p className="about__lead">
            Marsot Construction is a family-owned painting and drywall company
            serving homeowners and contractors across King and Snohomish County.
          </p>
        </div>
      </header>

      <section className="about__content">
        <div className="container about__inner">
          <div className="about__block">
            <h2>Who We Are</h2>
            <p>
            We're a family-owned painting and drywall crew serving homeowners and 
            general contractors across King and Snohomish County. What sets us apart: 
            we handle both painting and drywall under one roof — no handoffs, no scheduling gaps, just clean, consistent work from start to finish. Licensed, insured, and built on referrals.
            </p>
          </div>

          <div className="about__block">
            <h2>What We Do</h2>
            <p>
              Our work focuses on interior and exterior painting, drywall
              installation, taping, mudding, and repairs. We prep surfaces
              properly, use quality materials, and leave every job site clean
              when we are done.
            </p>
          </div>

          <div className="about__block">
            <h2>Our Promise</h2>
            <p>
              Licensed and insured, we stand behind our work and treat every
              home like our own. From the first walkthrough to the final
              walkthrough, you will know what to expect and when to expect it.
            </p>
          </div>
        </div>
      </section>

      <section className="about__cta">
        <div className="container">
          <p>Ready to start your project?</p>
          <Link to="/#contact" className="btn">
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </article>
  )
}

export default About
