// To add project photos for a service:
// 1. Drop images into src/assets/services/<slug>/
// 2. import photo1 from '../assets/services/interior-painting/photo1.jpg'
// 3. Replace the placeholder object with { src: photo1, alt: 'Description' }
// To push commit steps: 1. git add . 2. git commit -m"Added photo..." 3. git push
// Note: these filenames must match the actual on-disk casing exactly
// (Intpaint1.jpg, Attic.jpg) — Windows ignores case but a Linux build host
// (e.g. Netlify/Vercel) won't, and a mismatched import would fail there.
import intpaint0 from '../assets/services/interior-painting/Intpaint1.jpg'
import intpaint1 from '../assets/services/interior-painting/intpaint1.jpeg'
import intpaint2 from '../assets/services/interior-painting/intpaint2.jpg'
import Yr26016 from '../assets/services/interior-painting/26016.jpeg'

import drywall1 from '../assets/services/drywall/drywall1.jpg'
import drywall2 from '../assets/services/drywall/drywall2.jpeg'
import drywall3 from '../assets/services/drywall/Attic.jpg'
import drywall4 from '../assets/services/drywall/20260117_223118186_iOS.jpg'
import drywall5 from '../assets/services/drywall/20260209_221602591_iOS.jpg'
import drywall6 from '../assets/services/drywall/drywall-ceiling-finish.jpg'
import drywall7 from '../assets/services/drywall/20260427_211118529_iOS.jpg'

import Yr25job from '../assets/services/exterior-painting/Yr25job.jpeg'
import extpaint2 from '../assets/services/exterior-painting/20260511_202509541_iOS.jpg'
import extpaint3 from '../assets/services/exterior-painting/20260810_204325171_iOS.jpg'

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
    seoTitle: 'Interior Painting Services | Marsot Construction',
    seoDescription:
      'Interior repaints for homeowners across King and Snohomish County: walls, ceilings, trim, and cabinets. Free estimates.',
    cardImage: interiorCard,
    cardImageLabel: 'Interior painting',
    heroImage: intpaint2,
    heroImageAlt: 'Two-tone accent wall and painted built-in closet',
    description:
      "We handle interior repaints for homeowners across King and Snohomish County. Walls, ceilings, trim, and cabinets, done with the same attention to prep and finish every time.",
    intro: "What's included:",
    includes: [
        'Interior walls and ceilings',
        'Trim, doors, and millwork',
        'Cabinet painting',
    ],
    outro:
      "Every job starts with a walkthrough and a written estimate. Call or text if you're planning a repaint.",
    steps: [
      {
        title: 'Walkthrough & Estimate',
        description:
          "We walk the space with you in person and talk through what you want out of the project. From there, we put together a clear, itemized estimate, so you know exactly what you're working with before anything gets scheduled."
      },
      {
        title: 'Scope & Scheduling',
        description:
          "Once you're ready to move forward, we lock in the scope and a schedule that works for your household. Every project is a little different, so the details we confirm here depend on what your job actually needs."
      },
      {
        title: 'Prep & Protection',
        description:
         "Your home and furniture are protected and surfaces are properly prepped before any paint goes on. It's not the most visible part of the job, but it's what makes everything after it look right."
      },
      {
        title: 'The work',
        description:
        "This is where the painting happens, at the pace the job calls for rather than rushed to clear the schedule."
      },
      {
        title: 'Final Walkthrough & Clean Finish',
        description:
          "Before we call the job done, we walk the space with you and address anything that needs a second look. We clean up thoroughly, so you're left with a finished room, not a mess to deal with."
      },
    ],
    photos: [
      { src: intpaint0, alt: 'Bedroom with painted closet doors and accent wall' },
      { src: intpaint1, alt: 'Marsot painter spraying trim in a hallway' },
      { src: intpaint2, alt: 'Two-tone accent wall and painted built-in closet' },
      { src: Yr26016, alt: 'Kitchen and great room repaint' },
    ],
  },
  {
    slug: 'exterior-painting',
    title: 'Exterior Painting Services',
    seoTitle: 'Exterior Painting Services | Marsot Construction',
    seoDescription:
      'Exterior repaints built for Pacific Northwest weather: siding, trim, and full surface prep. Serving King and Snohomish County.',
    cardImage: extpaint3,
    cardImageLabel: 'Exterior painting',
    heroImage: extpaint3,
    heroImageAlt: 'Exterior repaint, brick Tudor-style home with navy trim',
    description:
      "Marsot Construction handles exterior repaints for Pacific Northwest weather: siding, trim, and every exterior surface, properly prepped before any paint goes on.",
    intro: "What's included:",
    includes: [
        'Siding and exterior walls',
        'Trim, fascia, and exterior details',
        'Full surface prep before any paint goes on',
        "Scheduling that accounts for weather, not just the calendar",
    ],
    outro:
      "Every job starts with a walkthrough and a written estimate. Reach out if you're planning to repaint the outside of your home.",
    steps: [
      {
        title: 'Walkthrough & Estimate',
        description:
          "We inspect the exterior in person, assess the condition of the surfaces, and put together a clear estimate based on what we actually see, not a guess from the street.",
      },
      {
        title: 'Scope & Scheduling',
        description:
          "We plan the work around the weather as much as your schedule, since exterior paint needs the right conditions to hold up properly. Timing may shift depending on the forecast, and we'll keep you posted if it does.",
      },
      {
        title: 'Prep & Protection',
        description:
         "Surfaces are properly prepared and your property is protected before any painting begins.",
      },
      {
        title: 'The Work',
        description:
          "Paint goes on in the sequence and timing the job calls for, and we adjust along the way if conditions require it.",
      },
      {
        title: 'Final Walkthrough & Clean Finish',
        description:
          "We walk the property with you when the work is done, note anything that needs follow-up, and clean up the site before we head out.",
      },
    ],
    photos: [
      { src: Yr25job, alt: 'Exterior repaint, craftsman-style home' },
      { src: extpaint2, alt: 'Exterior repaint, two-story home' },
      { src: extpaint3, alt: 'Exterior repaint, brick Tudor-style home with navy trim' },
    ],
  },
  {
    slug: 'drywall',
    title: 'Drywall (Install & Repair)',
    seoTitle: 'Drywall Installation & Repair | Marsot Construction',
    seoDescription:
      'Drywall installation, taping, mudding, and repair from the same crew that handles your painting. Serving King and Snohomish County.',
    cardImage: drywallCard,
    cardImageLabel: 'Drywall work',
    // Bare, unprimed board (not a finished paint job) so it's obvious at a
    // glance that this page is about drywall, not painting — Alvaro's call.
    heroImage: drywall5,
    heroImageAlt: 'New drywall installation, curved stairwell before finish',
    description:
      "Marsot Construction handles full drywall work: new installation, remodels, and repairs, with the same surface prep that carries into our painting work. One crew handles the wall from framing to finish coat.",
    intro: "What's included:",
    includes: [
          'New drywall installation',
          'Repairs: damage, patches, water or impact issues',
          'Taping, mudding, and texture matching',
          "Prep that sets up a clean paint job afterward",
      ],
    outro:
      "Every job starts with a walkthrough and a written estimate. Contact us for drywall or painting work in the Seattle area.",
    steps: [
      {
        title: 'Walkthrough & Estimate',
        description:
          "We assess the job in person, whether it's a new install, a repair, or something in between, and put together an estimate based on what's actually going on, not just what's visible on the surface.",
      },
      {
        title: 'Scope & Scheduling',
        description:
          "We confirm what the job involves and roughly when it'll happen, coordinating around your space or other trades when that's part of the picture.",
      },
      {
        title: 'Prep & Protection',
        description:
          "The work area and anything nearby are protected before material comes out or goes in.",
      },
      {
        title: 'The Work',
        description:
          "Drywall is installed and finished using the process the job calls for: hung, taped, and matched so a repair blends in rather than stands out.",
      },
      {
        title: 'Final Walkthrough & Clean Finish',
        description:
          "We review the finished wall together, confirm it's ready for the next step, and clean up before we go.",
      }
    ],
    photos: [
      { src: drywall1, alt: 'Marsot drywall crew finishing a ceiling repair' },
      { src: drywall2, alt: 'Finished stairwell walls and trim, ready for paint' },
      { src: drywall3, alt: 'New drywall installation in an attic room' },
      { src: drywall4, alt: 'New drywall installation, cathedral ceiling' },
      { src: drywall5, alt: 'New drywall installation, curved stairwell before finish' },
      { src: drywall6, alt: 'Marsot drywall crew finishing a ceiling seam' },
      { src: drywall7, alt: 'Marsot drywall crew finishing a wall corner' },
    ],
  },
]

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug)
}
