import { Link } from 'react-router-dom' // Link to the contact page

export default function CallToAction() {
  return (
    <section className="cta"> {/* Photo background with a blue overlay, set in theme.css */}
      <div className="container">
        <h2>Ready for your first small win?</h2>
        <p>Book a strategy call and let's work out your next step together.</p>
        <Link to="/contact" className="btn btn--green">Book a strategy call</Link>
      </div>
    </section>
  )
}