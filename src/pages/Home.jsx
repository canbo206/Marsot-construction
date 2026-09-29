import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Services from './Services'
import Gallery from './Gallery'
import Contact from './Contact'
import heroBackground from '../assets/hero/hero-Background.webp'

function Home() {
  return (
    <>
      <Seo
        title="Marsot Construction | Painting & Drywall, King & Snohomish County"
        description="Family-run painting and drywall contractor serving King and Snohomish County. Interior, exterior, and drywall work from one crew. Free estimates."
        path="/"
        image={heroBackground}
      />
      <Hero />
      <Services />
      <Gallery />
      <Contact />
    </>
  )
}

export default Home
