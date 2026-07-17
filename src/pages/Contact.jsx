import './Contact.css'

function Contact() {
  return (
    <section className="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <h2>Get a Free Estimate</h2>
          <p className="contact__lead">
            Tell us about your painting or drywall project and we'll get back to
            you with a free estimate. Serving King and Snohomish County.
          </p>

          <ul className="contact__details">
            <li>
              <span className="contact__label">Phone</span>
              <a href="tel:+14252690118">(425) 269-0118</a>
            </li>
            <li>
              <span className="contact__label">Email</span>
              <a href="mailto:marsotconstruction@gmail.com">
                marsotconstruction@gmail.com
              </a>
            </li>
            <li>
              <span className="contact__label">Service Area</span>
              <span>King &amp; Snohomish County, WA</span>
            </li>
          </ul>

          <p className="contact__badge">Licensed &amp; Insured</p>
        </div>

        <form
          className="contact__form"
          action="https://formsubmit.co/marsotconstruction@gmail.com"
          method="POST"
        >
          <label>
            Name
            <input type="text" name="name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" required />
          </label>

          <label>
            Phone
            <input type="tel" name="phone" />
          </label>

          <label>
            How can we help?
            <textarea name="message" rows="5" required></textarea>
          </label>

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
