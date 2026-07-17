import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    title: 'Interior Painting Services',
    description:
      'Transform your space with our professional interior painting solutions tailored to your needs.',
  },
  {
    title: 'Exterior Painting Services',
    description:
      "Enhance your home's curb appeal with our expert exterior painting services and durable finishes.",
  },
  {
    title: 'Drywall Services',
    description:
      "At Marsot Construction, we deliver flawless drywall work from start to finish. Our team handles every stage—installation, taping, mudding, and repairs—with precision and consistency. Whether it's new construction or a small patch job, we ensure smooth, seamless surfaces that are perfectly prepped for paint and built to last.",
  },
]

function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2 className="services__heading">Our Services Offered</h2>
        <p className="services__intro">
          Specializing in painting and drywall installation, ensuring quality
          and satisfaction for every project.
        </p>

        <div className="services__grid">
          {services.map((service) => (
            <div className="services__card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services__cta">
          <Link to="/contact" className="btn">
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
