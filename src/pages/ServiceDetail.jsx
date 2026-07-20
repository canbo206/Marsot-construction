import { Link, Navigate, useParams } from 'react-router-dom'
import { getServiceBySlug } from '../data/services'
import './ServiceDetail.css'

function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return <Navigate to="/" replace />
  }

  return (
    <article className="service-detail">
      <header className="service-detail__hero">
        <div className="container">
          <Link to="/#services" className="service-detail__back">
            ← Back to Services
          </Link>
          <h1>{service.title}</h1>
          <p className="service-detail__intro">{service.intro}</p>
        </div>
      </header>

      <section className="service-detail__steps">
        <div className="container">
          <h2>Our Process</h2>
          <ol className="service-detail__steps-list">
            {service.steps.map((step, index) => (
              <li className="service-detail__step" key={step.title}>
                <span className="service-detail__step-num">Step {index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="service-detail__cta">
            <Link to="/#contact" className="btn">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="service-detail__photos">
        <div className="container">
          <h2>Project Photos</h2>
          <p className="service-detail__photos-intro">
            Recent {service.title.toLowerCase()} work across King and Snohomish
            County.
          </p>

          <div className="service-detail__photos-grid">
            {service.photos.map((photo) => (
              <div className="service-detail__photo" key={photo.label}>
                {photo.src ? (
                  <img src={photo.src} alt={photo.alt ?? photo.label} />
                ) : (
                  <span className="service-detail__photo-placeholder">
                    {photo.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}

export default ServiceDetail
