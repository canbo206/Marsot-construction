import { Link } from 'react-router-dom'
import './About.css'
import { LICENSE_NUMBER } from '../data/business'
import Seo from '../components/Seo'
import heroBackground from '../assets/hero/hero-Background.jpg'

function About() {
  return (
    <article className="about">
      <Seo
        title="About Marsot Construction | Family-Owned Painting & Drywall"
        description="Marsot Construction is a family-owned painting and drywall crew serving King and Snohomish County. Licensed and insured, built on referrals."
        path="/about"
        image={heroBackground}
      />
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
              We're a family-owned painting and drywall crew serving homeowners
              and general contractors across King and Snohomish County. What
              sets us apart: one crew handles both the painting and the
              drywall. No handoffs between trades, no gaps in the schedule
              waiting on someone else to show up. Licensed and insured, and
              most of our work still comes from people who've used us before.
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
              Licensed and insured ({LICENSE_NUMBER}). We tell you what to
              expect and when to expect it, from the first walkthrough to the
              last, and we don't leave a job half-finished.
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
