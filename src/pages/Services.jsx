import { Link } from 'react-router-dom'
import { services } from '../data/services'
import './Services.css'

function Services() {
  return (
    <section id="services" className="services page-section">
      <div className="container">
        <h2 className="services__heading">Our Services Offered</h2>
        <p className="services__intro">
          Specializing in painting and drywall installation, ensuring quality
          and satisfaction for every project.
        </p>

        <div className="services__grid">
          {services.map((service) => (
            <div className="services__card" key={service.slug}>
              <div className="services__card-image">
                {service.cardImage ? (
                  <img
                    src={service.cardImage}
                    alt={service.cardImageAlt ?? service.title}
                  />
                ) : (
                  <span className="services__card-placeholder">
                    {service.cardImageLabel}
                  </span>
                )}
              </div>

              <div className="services__card-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="btn btn--secondary services__learn-more"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
