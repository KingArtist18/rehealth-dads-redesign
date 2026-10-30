import { Link } from 'react-router-dom' // Link to the ReBuild page

export default function Rebuild() {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="panel"> {/* Green gradient card */}
          <h2>The ReHealth ReBuild</h2>
          {/* PLACEHOLDER COPY: replace with Paul's real description of the programme */}
          <p>A coaching programme that helps you rebuild your routine, your health and your confidence.</p>
          <Link to="/rebuild" className="btn btn--light">Learn about the ReBuild</Link>
        </div>
      </div>
    </section>
  )
}