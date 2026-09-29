// To add gallery photos:
// 1. Drop images into src/assets/gallery/ (or reuse a photo already imported
//    for a service page, like the entries below)
// 2. import photo1 from '../assets/gallery/photo1.webp'
// 3. Add { src: photo1, alt: 'Description' } to galleryPhotos below
//
// These photos are reused from the service pages (src/data/services.js) —
// that's expected for a homepage "recent work" summary. This is a curated
// subset, not every real photo on file — see services.js for the full set
// per service (drywall in particular has more not repeated here).
// Note: filenames must match the actual on-disk casing exactly
// (Intpaint1.jpg, Attic.jpg) — see the same note in data/services.js.
import extpaint1 from '../assets/services/exterior-painting/20260810_204325171_iOS.webp'
import Yr25job from '../assets/services/exterior-painting/Yr25job.webp'
import deckStaining from '../assets/services/exterior-painting/20260807_235349052_iOS.webp'
import intpaint0 from '../assets/services/interior-painting/intpaint-bedroom.webp'
import intpaint2 from '../assets/services/interior-painting/intpaint2.webp'
import Yr26016 from '../assets/services/interior-painting/26016.webp'
import intpaint1 from '../assets/services/interior-painting/intpaint-hallway.webp'
import drywallAttic from '../assets/services/drywall/Attic.webp'
import drywall2 from '../assets/services/drywall/drywall2.webp'
import drywall1 from '../assets/services/drywall/drywall1.webp'

export const galleryPhotos = [
  { src: extpaint1, alt: 'Exterior repaint, brick Tudor-style home with navy trim' },
  { src: Yr25job, alt: 'Exterior repaint, craftsman-style home' },
  { src: deckStaining, alt: 'Finished deck after staining' },
  { src: intpaint0, alt: 'Bedroom with painted closet doors and accent wall' },
  { src: intpaint2, alt: 'Two-tone accent wall and painted built-in closet' },
  { src: Yr26016, alt: 'Kitchen and great room repaint' },
  { src: intpaint1, alt: 'Marsot painter spraying trim in a hallway' },
  { src: drywallAttic, alt: 'New drywall installation in an attic room' },
  { src: drywall2, alt: 'Finished stairwell walls and trim, ready for paint' },
  { src: drywall1, alt: 'Marsot drywall crew finishing a ceiling repair' },
]

export const galleryPreviewCount = 3
