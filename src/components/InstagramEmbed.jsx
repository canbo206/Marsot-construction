import { useEffect } from 'react'

const SCRIPT_SRC = 'https://www.instagram.com/embed.js'

function loadEmbedScript(onLoad) {
  const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`)

  if (existing) {
    if (window.instgrm) {
      onLoad()
    } else {
      existing.addEventListener('load', onLoad)
    }
    return
  }

  const script = document.createElement('script')
  script.src = SCRIPT_SRC
  script.async = true
  script.onload = onLoad
  document.body.appendChild(script)
}

// Renders an Instagram post, reel, or video inline from its public URL.
function InstagramEmbed({ url }) {
  useEffect(() => {
    loadEmbedScript(() => window.instgrm?.Embeds.process())
  }, [url])

  return (
    <div className="instagram-embed">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
      />
    </div>
  )
}

export default InstagramEmbed
