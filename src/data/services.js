// To add project photos for a service:
// 1. Drop images into src/assets/services/<slug>/
// 2. import photo1 from '../assets/services/interior-painting/photo1.jpg'
// 3. Replace the placeholder object with { src: photo1, alt: 'Description' }

// To add a card image on the services page:
// 1. Drop an image into src/assets/services/<slug>/ (e.g. card.jpg)
// 2. import interiorCard from '../assets/services/interior-painting/card.jpg'
// 3. Set cardImage: interiorCard on that service below

export const services = [
  {
    slug: 'interior-painting',
    title: 'Interior Painting Services',
    cardImage: null,
    cardImageLabel: 'Interior painting',
    description:
      'Transform your space with our professional interior painting solutions tailored to your needs.',
    intro:
      'From single rooms to whole-home refreshes, we protect your floors and furniture, prep every surface correctly, and leave you with a clean, durable finish.',
    steps: [
      {
        title: 'Walkthrough & Estimate',
        description:
          'We visit your home, discuss colors and finishes, note repairs needed, and provide a clear written estimate with no surprises.',
      },
      {
        title: 'Prep & Protection',
        description:
          'We move and cover furniture, patch holes and cracks, sand smooth, caulk trim, and prime stains so paint adheres properly.',
      },
      {
        title: 'Paint Application',
        description:
          'Walls, ceilings, trim, and doors get the right products for each surface — cut-in lines are sharp and coverage is even.',
      },
      {
        title: 'Final Walkthrough',
        description:
          'We touch up any details, remove masking, clean up thoroughly, and walk the job with you before we call it done.',
      },
    ],
    photos: [
      { label: 'Living room repaint' },
      { label: 'Bedroom accent wall' },
      { label: 'Trim & doors' },
      { label: 'Ceiling refresh' },
    ],
  },
  {
    slug: 'exterior-painting',
    title: 'Exterior Painting Services',
    cardImage: null,
    cardImageLabel: 'Exterior painting',
    description:
      "Enhance your home's curb appeal with our expert exterior painting services and durable finishes.",
    intro:
      'Pacific Northwest weather demands the right prep and products. We scrape, sand, prime, and paint siding, trim, and decks built to last.',
    steps: [
      {
        title: 'Site Review & Quote',
        description:
          'We inspect siding, trim, and decks for peeling paint, rot, or moisture issues and recommend the right scope before we start.',
      },
      {
        title: 'Surface Prep',
        description:
          'Loose paint is removed, wood is sanded and repaired, gaps are caulked, and bare areas are primed for maximum adhesion.',
      },
      {
        title: 'Painting & Coating',
        description:
          'We apply premium exterior coatings to siding, fascia, trim, and other surfaces using techniques suited to each material.',
      },
      {
        title: 'Cleanup & Inspection',
        description:
          'Drop cloths come up, hardware is reattached, and we do a final pass with you to make sure every detail looks right.',
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
    title: 'Drywall Services',
    cardImage: null,
    cardImageLabel: 'Drywall work',
    description:
      'Flawless drywall work from start to finish — installation, taping, mudding, and repairs with smooth surfaces ready for paint.',
    intro:
      'Whether it is new construction, a remodel, or a small patch, we deliver seamless walls and ceilings that are straight, smooth, and built to last.',
    steps: [
      {
        title: 'Assessment & Plan',
        description:
          'We measure the scope — new hang, full finish, or repair — and confirm timelines, access, and how the space will be used.',
      },
      {
        title: 'Hang or Repair',
        description:
          'Board goes up with proper fastening and layout, or damaged sections are cut out and patched to match existing thickness.',
      },
      {
        title: 'Tape, Mud & Sand',
        description:
          'Seams are taped and coated in multiple passes, corners are straight, and everything is sanded smooth between coats.',
      },
      {
        title: 'Prime-Ready Finish',
        description:
          'We do a final sand and inspection so surfaces are flat, blemish-free, and ready for primer and paint.',
      },
    ],
    photos: [
      { label: 'New wall install' },
      { label: 'Ceiling repair' },
      { label: 'Texture match' },
      { label: 'Patch & blend' },
    ],
  },
]

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug)
}
