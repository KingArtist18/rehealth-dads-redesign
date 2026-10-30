import { Routes, Route } from 'react-router-dom' // Tools for switching pages
import Navbar from './components/Navbar' // Top menu bar
import Footer from './components/Footer' // Bottom section
import Home from './pages/Home' // The home page

export default function App() {
  return (
    <>
      <Navbar /> {/* Shown at the top of every page */}
      <main>
        <Routes>
          {/* "/" is the home URL, so it shows the Home page */}
          <Route path="/" element={<Home />} />
          {/* About, Contact and ReBuild routes are added in batch 2 */}
        </Routes>
      </main>
      <Footer /> {/* Shown at the bottom of every page */}
    </>
  )
}