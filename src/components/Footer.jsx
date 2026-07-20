import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            Marsot<span>Construction</span>
          </span>
          <p>
            Family-owned painting &amp; drywall serving King and Snohomish
            County. Licensed &amp; Insured.
          </p>
        </div>

        <div className="footer__col">
          <h4>Pages</h4>
          <a href="/#home">Home</a>
          <a href="/#services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/about">About</a>
          <a href="/#contact">Contact</a>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <a href="tel:+14252690118">(425) 269-0118</a>
          <a href="mailto:marsotconstruction@gmail.com">
            marsotconstruction@gmail.com
          </a>
          <span>King &amp; Snohomish County, WA</span>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container">
          © {new Date().getFullYear()} Marsot Construction. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
