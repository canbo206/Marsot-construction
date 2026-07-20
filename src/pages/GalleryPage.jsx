import { Link } from 'react-router-dom'
import { galleryPhotos } from '../data/gallery'
import './GalleryPage.css'

function GalleryPhoto({ photo }) {
  return (
    <div className="gallery-page__item">
      {photo.src ? (
        <img src={photo.src} alt={photo.alt ?? photo.label} />
      ) : (
        <span className="gallery-page__placeholder">{photo.label}</span>
      )}
    </div>
  )
}

function GalleryPage() {
  return (
    <article className="gallery-page">
      <header className="gallery-page__header">
        <div className="container">
          <Link to="/#gallery" className="gallery-page__back">
            ← Back to Home
          </Link>
          <h1>Project Gallery</h1>
          <p>
            Recent painting and drywall work across King and Snohomish County.
          </p>
        </div>
      </header>

      <section className="gallery-page__grid-wrap">
        <div className="container">
          <div className="gallery-page__grid">
            {galleryPhotos.map((photo) => (
              <GalleryPhoto photo={photo} key={photo.label} />
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}

export default GalleryPage
