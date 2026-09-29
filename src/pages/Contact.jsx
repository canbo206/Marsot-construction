import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './Contact.css'
import {
  SITE_URL,
  BUSINESS_PHONE,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_EMAIL,
  BUSINESS_HOURS_DISPLAY,
} from '../data/business'

function Contact() {
  const [searchParams] = useSearchParams()
  const [sending, setSending] = useState(false)

  // FormSubmit redirects back to the _next URL below after a successful
  // submission, so "?sent=1" in the address bar is what tells us to show the
  // confirmation. It's a normal form POST, not fetch, so this still works
  // even if the page's JavaScript fails to load.
  const justSent = searchParams.get('sent') === '1'

  return (
    <section id="contact" className="contact page-section">
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
              <a href={`tel:${BUSINESS_PHONE}`}>{BUSINESS_PHONE_DISPLAY}</a>
            </li>
            <li>
              <span className="contact__label">Email</span>
              <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>
            </li>
            <li>
              <span className="contact__label">Service Area</span>
              <span>King &amp; Snohomish County, WA</span>
            </li>
            <li>
              <span className="contact__label">Hours</span>
              <span>{BUSINESS_HOURS_DISPLAY}</span>
            </li>
          </ul>

          <p className="contact__badge">Licensed &amp; Insured</p>
        </div>

        {justSent ? (
          <p className="contact__sent" role="status">
            Thanks, your message has been sent. We'll get back to you about
            your estimate. If it's urgent, call or text {BUSINESS_PHONE_DISPLAY}.
          </p>
        ) : (
          <form
            className="contact__form"
            action={`https://formsubmit.co/${BUSINESS_EMAIL}`}
            method="POST"
            onSubmit={() => setSending(true)}
          >
            {/* FormSubmit's own hidden settings fields. Docs: formsubmit.co */}
            <input
              type="hidden"
              name="_subject"
              value="New estimate request from the Marsot website"
            />
            {/* Where FormSubmit sends the visitor afterward. Without this they
                land on FormSubmit's generic off-brand confirmation page.
                Must be an absolute URL, so it points at the live domain —
                meaning a local test submission redirects to production. */}
            <input type="hidden" name="_next" value={`${SITE_URL}/?sent=1#contact`} />
            {/* Spam trap: real people never see this, so anything that fills
                it in is a bot and FormSubmit discards the submission. */}
            <input
              type="text"
              name="_honey"
              className="contact__honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

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

            <button type="submit" className="btn" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Contact
