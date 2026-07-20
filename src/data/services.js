// To add project photos for a service:
// 1. Drop images into src/assets/services/<slug>/
// 2. import photo1 from '../assets/services/interior-painting/photo1.jpg'
// 3. Replace the placeholder object with { src: photo1, alt: 'Description' }
import intpaint0 from '../assets/services/interior-painting/intpaint1.jpg'
import intpaint1 from '../assets/services/interior-painting/intpaint1.jpeg'
import intpaint2 from '../assets/services/interior-painting/intpaint2.jpg'

import drywall1 from '../assets/services/drywall/drywall1.jpg'
import drywall2 from '../assets/services/drywall/drywall2.jpeg'
import drywall3 from '../assets/services/drywall/attic.jpg'

// To add a card image on the services page:
// 1. Drop an image into src/assets/services/<slug>/ (e.g. card.jpg)
// 2. import interiorCard from '../assets/services/interior-painting/card.jpg'
// 3. Set cardImage: interiorCard on that service below

import interiorCard from '../assets/services/interior-painting/intpaintCard.jpg'
// import exteriorCard from '../assets/services/interior-painting/intpaintCard.jpg'
import drywallCard from '../assets/services/drywall/drywallCard.jpg'

export const services = [
  {
    slug: 'interior-painting',
    title: 'Interior Painting Services',
    cardImage: interiorCard,
    cardImageLabel: 'Interior painting',
    description:
      "Marsot Construction handles interior repaints for homeowners across King and Snohomish County — walls, ceilings, trim, and cabinets, done with the same attention to prep and finish on every job.",
    intro: "What's included:",
    includes: [
        'Interior walls and ceilings',
        'Trim, doors, and millwork',
        'Cabinet painting',
        "Color and finish guidance if you're not sure where to start",
    ],
    outro:
      "Every job starts with a walkthrough and a clear estimate, and follows the same process from there — see process below. Call or text us if you're planning a repaint.",
    steps: [
      {
        title: 'Walkthrough & Estimate',
        description:
          "We take a look at the space in person and talk through what you're hoping to get out of the project. From there, we put together a clear estimate — so you know what you're working with before anything gets scheduled."
      },
      {
        title: 'Scope & Scheduling',
        description:
          "Once you're ready to move forward, we work out the details that matter for your job. Every project is a little different, so what gets nailed down here — and when — depends on what you actually need."
      },
      {
        title: 'Prep & Protection',
        description:
         "Your home and furniture get protected, and surfaces are prepped properly before any paint goes on. It's not the most exciting part of the job, but it's the part that makes everything after it look right."
      },
      {
        title: 'The work',
        description:
        "This is where the painting actually happens — done at the pace and with the process the job calls for, not rushed just to get it off the schedule."
      },
      {
        title: 'Final Walkthrough & Clean Finish',
        description:
          "Before we call it done, we walk through the space with you and take care of anything that needs a second look. We clean up after ourselves too, so you're left with a finished room, not a mess."
      },
    ],
    photos: [
      { src: intpaint0, alt: 'Living room repaint' },
      { src: intpaint1, alt: 'Bedroom accent wall'},
      { src: intpaint2, alt: 'Trim & doors' },
      { label: 'Ceiling refresh' },
    ],
  },
  {
    slug: 'exterior-painting',
    title: 'Exterior Painting Services',
    cardImage: null,
    cardImageLabel: 'Exterior painting',
    description:
      "Marsot Construction handles exterior repaints built to hold up — siding, trim, and every exterior surface, prepped and painted to last through Pacific Northwest weather.",
    intro: "What's included:",
    includes: [
        'Siding and exterior walls',
        'Trim, fascia, and exterior details',
        'Full surface prep before any paint goes on',
        "Scheduling that accounts for weather, not just the calendar",
    ],
    outro:
      "Every job starts with a walkthrough and a clear estimate, and follows the same process from there — see process below. Reach out if you're planning to repaint the outside of your home.",
    steps: [
      {
        title: 'Walkthrough & Estimate',
        description:
          "We take a look at the exterior in person, get a sense of the condition it's in, and put together a clear estimate based on what we actually see — not a guess from the street.",
      },
      {
        title: 'Scope & Scheduling',
        description:
          "We plan the work around the weather as much as your schedule, since exterior paint needs the right conditions to hold up. Timing can shift a bit depending on what the forecast does.",
      },
      {
        title: 'Prep & Protection',
        description:
         "Surfaces get properly prepared and your property gets protected before any painting begins.",
      },
      {
        title: 'The Work',
        description:
          "Paint goes on in whatever sequence and timing the job actually needs, adjusting along the way if conditions call for it.",
      },
      {
        title: 'Final Walkthrough & Clean Finish',
        description:
          "We walk the property with you when it's done, take care of any touch-ups on the spot, and clean up the site before we head out.",
      },
    ],
    photos: [
      { label: 'Full exterior repaint' },
      { label: 'Trim & fascia' },
      { label: 'Front entry refresh' },
      { label: 'Deck staining' },
    ],
  },
  {
    slug: 'drywall',
    title: 'Drywall (Install & Repair)',
    cardImage: drywallCard,
    cardImageLabel: 'Drywall work',
    description:
      "Marsot Construction handles full drywall work — new installation, remodels, and repairs — with the same strong surface prep that carries into our painting work. It's a real advantage: the same crew handles the wall from framing to finish coat.",
    intro: "What's included:",
    includes: [
          'New drywall installation',
          'Repairs — damage, patches, water or impact issues',
          'Taping, mudding, and texture matching',
          "Prep that sets up a clean paint job afterward",
      ],
    outro:
      "Every job starts with a walkthrough and a clear estimate, and follows the same process from there — see process below. Contact us for drywall or painting work in the Seattle area.",
    steps: [
      {
        title: 'Walkthrough & Estimate',
        description:
          "We take a look at the job in person — whether it's a new install, a repair, or something in between — and put together an estimate based on what's actually going on, not just what's visible on the surface.",
      },
      {
        title: 'Scope & Scheduling',
        description:
          "We talk through what the job involves and roughly when it'll happen, coordinating around your space or other trades if that's part of the picture.",
      },
      {
        title: 'Prep & Protection',
        description:
          "The work area and anything nearby get protected before material comes out or goes in.",
      },
      {
        title: 'The Work',
        description:
          "Drywall gets installed and finished using whatever process the job actually calls for — hung, taped, and matched so the repair blends in rather than stands out.",
      },
      {
        title: 'Final Walkthrough & Clean Finish',
        description:
          "We take a look at the finished wall together, make sure it's ready for the next step, and clean up before we go.",
      }
    ],
    photos: [
      { src: drywall1, alt:  'New wall install' },
      { src: drywall2, alt:  'Ceiling repair' },
      { src: drywall3, alt:  'Texture match' },
      { label: 'Patch & blend' },
    ],
  },
]

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug)
}
