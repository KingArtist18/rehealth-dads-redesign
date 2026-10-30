import { useEffect } from 'react' // Lets us run code when the page changes
import { Routes, Route, useLocation } from 'react-router-dom' // Tools for switching pages
import Navbar from './components/Navbar' // Top menu bar
import Footer from './components/Footer' // Bottom section
import Home from './pages/Home' // The home page
import TheReHealthReBuild from './pages/TheReHealthReBuild' // Programme page
import About from './pages/About' // About Paul page
import Contact from './pages/Contact' // Contact + free guide page

// Scrolls back to the top whenever you open a new page
function ScrollToTop() {
  const { pathname } = useLocation() // The current URL path, e.g. "/about"
  useEffect(() => { window.scrollTo(0, 0) }, [pathname]) // Runs each time the path changes
  return null // Shows nothing on screen
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar /> {/* Shown at the top of every page */}
      <main>
        <Routes>
          {/* Each route matches a URL to a page */}
          <Route path="/" element={<Home />} />
          <Route path="/rebuild" element={<TheReHealthReBuild />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer /> {/* Shown at the bottom of every page */}
    </>
  )
}