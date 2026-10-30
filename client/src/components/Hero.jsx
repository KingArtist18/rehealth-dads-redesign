import { Link } from 'react-router-dom' // For the two buttons that go to other pages

export default function Hero() {
  return (
    <section className="hero"> {/* Blue gradient banner */}
      <div className="container hero__grid"> {/* Two columns: text left, photo right */}
        <div className="hero__copy">
          <h1>Become the man you want to be.</h1> {/* Main headline (only one h1 per page) */}
          <p className="hero__lead">
            Practical coaching for fathers who are tired of starting over. Build habits that last,
            one small win at a time.
          </p>
          <div className="hero__actions"> {/* Holds the two buttons side by side */}
            <Link to="/contact" className="btn btn--green">Get the free guide</Link>
            <Link to="/rebuild" className="btn btn--ghost">See the ReBuild</Link> {/* Outlined button */}
          </div>
        </div>
        <div className="hero__photo"> {/* Arch-shaped photo frame with a copper border */}
          {/* Put your image at client/public/images/hero.jpg */}
          <img src="/images/hero.jpg" alt="A father and child outdoors" /> {/* alt text describes the photo */}
        </div>
      </div>
    </section>
  )
}