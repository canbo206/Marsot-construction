import { SITE_URL } from '../data/business'

// Sets the page title, meta description, canonical link, and Open Graph
// tags for whichever page renders it. React 19 hoists these tags into
// <head> on its own and removes them when the page unmounts, so no head
// manager library is needed — just render <Seo> once per page.
//
// `path` is the route (e.g. "/about"). `image` should be an imported photo
// (Vite turns it into a URL at build time) — a real job photo, not the logo.
function Seo({ title, description, path, image }) {
  const url = `${SITE_URL}${path}`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={`${SITE_URL}${image}`} />}
    </>
  )
}

export default Seo
