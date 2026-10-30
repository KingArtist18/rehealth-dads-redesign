import { useState } from 'react' // Lets the component remember if the mobile menu is open
import { NavLink, Link } from 'react-router-dom' // Links that change pages without reloading

export default function Navbar() {
  const [open, setOpen] = useState(false) // open = is the mobile menu showing? Starts closed
  const close = () => setOpen(false) // Helper that closes the menu

  return (
    <header className="nav">
      <div className="container nav__inner">
        {/* Logo text: "Re" and "Dads" in blue, "Health" in green, linking home */}
        <Link to="/" className="logo" onClick={close} aria-label="ReHealth Dads home">
          <span className="logo__blue">Re</span><span className="logo__green">Health</span> <span className="logo__blue">Dads</span>
        </Link>

        {/* Menu button, only visible on phones. Clicking flips open/closed */}
        <button className="nav__toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">
          {open ? 'Close' : 'Menu'} {/* Label changes depending on state */}
        </button>

        {/* Adds the class "is-open" when the menu should show on mobile */}
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {/* NavLink adds an "active" class to the page you're on. "end" stops Home matching every page */}
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/rebuild" onClick={close}>The ReHealth ReBuild</NavLink>
          <NavLink to="/about" onClick={close}>About</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
          {/* Green button style comes from .btn and .btn--green in theme.css */}
          <Link to="/contact" className="btn btn--green" onClick={close}>Get the free guide</Link>
        </nav>
      </div>
    </header>
  )
}