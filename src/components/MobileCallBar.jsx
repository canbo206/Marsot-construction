import './MobileCallBar.css'
import { BUSINESS_PHONE, BUSINESS_PHONE_DISPLAY } from '../data/business'

// Fixed call/estimate bar pinned to the bottom on phones only (hidden at
// tablet width and up by the CSS). Most visitors to a contractor site are
// on a phone, and asking them to scroll back up to the header to find a
// number loses calls.
//
// The bar is excluded from print output and sits above page content via
// z-index; index.css adds bottom padding on small screens so it can't
// cover the end of the footer.
function MobileCallBar() {
  return (
    <div className="mobile-call-bar">
      <a
        href={`tel:${BUSINESS_PHONE}`}
        className="mobile-call-bar__call"
        aria-label={`Call Marsot Construction at ${BUSINESS_PHONE_DISPLAY}`}
      >
        Call {BUSINESS_PHONE_DISPLAY}
      </a>
      <a href="/#contact" className="mobile-call-bar__quote">
        Free Estimate
      </a>
    </div>
  )
}

export default MobileCallBar
