import {
  SITE_URL,
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_EMAIL,
  SERVICE_AREAS,
  BUSINESS_HOURS_SCHEMA,
} from '../data/business'

// Site-wide schema.org data (rendered once, always present — see App.jsx).
// GeneralContractor (a HomeAndConstructionBusiness subtype) covers both
// painting and drywall under one entity; "HousePainter" alone would not.
// No street address on purpose — see the Areas We Serve note in the dev
// handoff doc on why the business never states where it's physically based.
const SERVICE_TYPES = [
  'Interior Painting',
  'Exterior Painting',
  'Drywall',
  'Deck and Siding Staining',
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: BUSINESS_NAME,
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  url: SITE_URL,
  areaServed: SERVICE_AREAS,
  openingHoursSpecification: [BUSINESS_HOURS_SCHEMA],
  makesOffer: SERVICE_TYPES.map((serviceType) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      serviceType,
      areaServed: SERVICE_AREAS,
    },
  })),
}

function BusinessSchema() {
  return (
    <script
      type="application/ld+json"
      // Content is a hardcoded object from data/business.js, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default BusinessSchema
