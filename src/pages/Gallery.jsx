import { Link } from 'react-router-dom'
import { galleryPhotos, galleryPreviewCount } from '../data/gallery'
import './Gallery.css'

function GalleryPhoto({ photo }) {
  return (
    <div className="gallery__item">
      {photo.src ? (
        <img src={photo.src} alt={photo.alt ?? photo.label} />
      ) : (
        <span className="gallery__placeholder">{photo.label}</span>
      )}
    </div>
  )
}

function Gallery() {
  const previewPhotos = galleryPhotos.slice(0, galleryPreviewCount)

  return (
    <section id="gallery" className="gallery page-section">
      <div className="container">
        <h2 className="gallery__heading">Our Work</h2>
        <p className="gallery__intro">
          A look at recent painting and drywall projects across King and
          Snohomish County.
        </p>

        <div className="gallery__preview">
          {previewPhotos.map((photo) => (
            <GalleryPhoto photo={photo} key={photo.label} />
          ))}
        </div>

        <div className="gallery__see-all">
          <Link to="/gallery" className="btn btn--secondary">
            See All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Gallery
