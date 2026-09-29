import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { GA_MEASUREMENT_ID } from '../data/business'

// Google Analytics 4. Renders nothing and loads nothing unless
// GA_MEASUREMENT_ID is filled in (see data/business.js), so local dev and
// staging stay out of the numbers until you deliberately opt in.
//
// This is a single-page app, so the browser only does one real page load.
// gtag records that first view by itself; every route change after it has
// to be reported manually. Without that, every visit looks like a
// one-page bounce no matter how much of the site someone actually read.
function Analytics() {
  const { pathname } = useLocation()
  // gtag's own config call already counts the landing page, so the effect
  // below has to skip its first run or that view gets counted twice.
  const isFirstRoute = useRef(true)

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    // gtag must forward `arguments` verbatim, so this can't be an arrow.
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA_MEASUREMENT_ID)
  }, [])

  useEffect(() => {
    if (isFirstRoute.current) {
      isFirstRoute.current = false
      return
    }
    if (!GA_MEASUREMENT_ID || !window.gtag) return

    window.gtag('event', 'page_view', {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [pathname])

  return null
}

export default Analytics
