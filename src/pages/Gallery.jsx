import './Gallery.css'

// Replace these with real project photos later.
// 1. Drop images into  src/assets/gallery/
// 2. import photo1 from '../assets/gallery/photo1.jpg'
// 3. Put { src: photo1, alt: '...' } objects in this array.
const photos = [
  { label: 'Interior repaint' },
  { label: 'Exterior repaint' },
  { label: 'Drywall install' },
  { label: 'Kitchen refresh' },
  { label: 'Trim & doors' },
  { label: 'Ceiling repair' },
]

function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <h2 className="gallery__heading">Our Work</h2>
        <p className="gallery__intro">
          A look at recent painting and drywall projects across King and
          Snohomish County.
        </p>

        <div className="gallery__grid">
          {photos.map((photo) => (
            <div className="gallery__item" key={photo.label}>
              {photo.src ? (
                <img src={photo.src} alt={photo.alt} />
              ) : (
                <span className="gallery__placeholder">{photo.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
