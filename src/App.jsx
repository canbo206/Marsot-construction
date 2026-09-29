import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollManager from './components/ScrollManager'
import BusinessSchema from './components/BusinessSchema'
import MobileCallBar from './components/MobileCallBar'
import Analytics from './components/Analytics'
import Home from './pages/Home'
import ServiceDetail from './pages/ServiceDetail'
import GalleryPage from './pages/GalleryPage'
import About from './pages/About'
// Blog.jsx, BlogPost.jsx, and data/blog.js are intentionally kept but
// unrouted — there's only one placeholder post so far. Re-add the routes
// below (and the Blog link in Navbar.jsx) once there's a real posting habit.

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Analytics />
      <BusinessSchema />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <MobileCallBar />
      </div>
    </BrowserRouter>
  )
}

export default App
