// To add gallery photos:
// 1. Drop images into src/assets/gallery/ (or reuse a photo already imported
//    for a service page, like the entries below)
// 2. import photo1 from '../assets/gallery/photo1.jpg'
// 3. Add { src: photo1, alt: 'Description' } to galleryPhotos below
//
// These photos are reused from the service pages (src/data/services.js) —
// that's expected for a homepage "recent work" summary. Only real photos
// are listed here; add more once there are more real jobs to show.
// extpaint1.jpg was removed from assets/services/exterior-painting on
// 2026-09-10 (replaced with new unconverted .heic photos) — see the note
// left for Alvaro about converting those before adding a second exterior
// gallery photo here.
import Yr25job from '../assets/services/exterior-painting/Yr25job.jpeg'
// Note: filenames must match the actual on-disk casing exactly
// (Intpaint1.jpg, Attic.jpg) — see the same note in data/services.js.
import intpaint0 from '../assets/services/interior-painting/Intpaint1.jpg'
import intpaint2 from '../assets/services/interior-painting/intpaint2.jpg'
import Yr26016 from '../assets/services/interior-painting/26016.jpeg'
import intpaint1 from '../assets/services/interior-painting/intpaint1.jpeg'
import drywallAttic from '../assets/services/drywall/Attic.jpg'
import drywall2 from '../assets/services/drywall/drywall2.jpeg'
import drywall1 from '../assets/services/drywall/drywall1.jpg'

export const galleryPhotos = [
  { src: Yr25job, alt: 'Exterior repaint, craftsman-style home' },
  { src: intpaint0, alt: 'Bedroom with painted closet doors and accent wall' },
  { src: intpaint2, alt: 'Two-tone accent wall and painted built-in closet' },
  { src: Yr26016, alt: 'Kitchen and great room repaint' },
  { src: intpaint1, alt: 'Marsot painter spraying trim in a hallway' },
  { src: drywallAttic, alt: 'New drywall installation in an attic room' },
  { src: drywall2, alt: 'Finished stairwell walls and trim, ready for paint' },
  { src: drywall1, alt: 'Marsot drywall crew finishing a ceiling repair' },
]

export const galleryPreviewCount = 3
