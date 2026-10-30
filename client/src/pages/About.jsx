import CallToAction from '../components/CallToAction' // Reuses the final call to action section

export default function About() {
  return (
    <>
      <section className="page-hero"> {/* Blue banner at the top of the page */}
        <div className="container">
          <h1>About Paul</h1>
          <p>A dad helping other dads make steady progress.</p>
        </div>
      </section>

      <section className="section">
        <div className="container duo duo--reverse"> {/* Text left, photo right */}
          <div>
            <h2>Why ReHealth Dads exists</h2>
            {/* PLACEHOLDER COPY: replace with Paul's real story before publishing */}
            <p>Being a dad is one of the best parts of life, and one of the most demanding.</p>
            <p>ReHealth Dads was created to help fathers look after their own health without losing time with their families.</p>
          </div>
          <div className="photo">
            <img src="/images/baby-kitchen.jpg" alt="Paul smiling while holding his baby son at home" />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <h2>Everyday moments</h2>
          <div className="gallery"> {/* Small row of photos */}
            <div className="photo"><img src="/images/pier-selfie.jpg" alt="Paul and his son smiling at the waterfront" /></div>
            <div className="photo"><img src="/images/shoulders-look.jpg" alt="Paul carrying his son on his shoulders" /></div>
            <div className="photo"><img src="/images/couch-together.jpg" alt="Paul and his son laughing on the couch" /></div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}