// Shared business facts referenced in more than one place, so each only
// needs to be entered once. See Hero.jsx, About.jsx, and Footer.jsx.

// Contractor license/UBI number. Empty on purpose: the real number hasn't
// been supplied yet, and an empty value means the three places that display
// it (Hero.jsx, About.jsx, Footer.jsx) fall back to just "Licensed &
// Insured" rather than printing a placeholder on the live site.
// Fill in the real number here and it appears in all three automatically.
// Never put a guessed or invented number here.
export const LICENSE_NUMBER = ''

// The site currently lives at staging.marsotconstruction.com but the plan
// (confirmed 2026-09-10) is to eventually move it to the bare domain — used
// for canonical links, Open Graph URLs, and schema.org data (see Seo.jsx and
// the JSON-LD block in App.jsx) so nothing has to change again at cutover.
export const SITE_URL = 'https://marsotconstruction.com'

export const BUSINESS_NAME = 'Marsot Construction'
export const BUSINESS_PHONE = '+14252690118'
export const BUSINESS_PHONE_DISPLAY = '(425) 269-0118'
export const BUSINESS_EMAIL = 'marsotconstruction@gmail.com'
// No street address anywhere on the site — see the Areas We Serve section
// of the dev handoff doc for why (deliberate decision, not an omission).
export const SERVICE_AREAS = ['King County, WA', 'Snohomish County, WA']
