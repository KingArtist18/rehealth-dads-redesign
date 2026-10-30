import { Link } from 'react-router-dom' // Page links

export default function Footer() {
  return (
    <footer className="footer"> {/* Dark charcoal bar */}
      <div className="container footer__inner">
        <div>
          <p className="footer__brand">ReHealth Dads</p>
          <p>Become the man you want to be.</p>
        </div>
        <nav> {/* Quick links */}
          <Link to="/rebuild">The ReHealth ReBuild</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      {/* new Date().getFullYear() prints the current year automatically */}
      <p className="footer__copy">© {new Date().getFullYear()} ReHealth Dads</p>
    </footer>
  )
}