import CallToAction from '../components/CallToAction' // Reuses the final call to action section

// The steps of the programme, in order. PLACEHOLDER COPY: replace with Paul's real programme details.
const steps = [
  ['Start where you are', 'We look at your week, your energy and what is realistic for you right now.'],
  ['Pick one small win', 'You choose a single change to focus on, so it never feels overwhelming.'],
  ['Build the habit', 'Regular check-ins keep you moving forward, even when life gets busy.'],
  ['Stack the next win', 'Once one habit sticks, we add the next, so progress keeps building.'],
]

export default function TheReHealthReBuild() {
  return (
    <>
      <section className="page-hero"> {/* Blue banner at the top of the page */}
        <div className="container">
          <h1>The ReHealth ReBuild</h1>
          <p>A coaching programme for fathers who want lasting change, one small win at a time.</p>
        </div>
      </section>

      <section className="section">
        <div className="container duo"> {/* Photo left, text right */}
          <div className="photo">
            <img src="/images/park-selfie.jpg" alt="A father with his son on his shoulders at a park" />
          </div>
          <div>
            <h2>Who it is for</h2>
            {/* PLACEHOLDER COPY: replace with Paul's real description */}
            <p>The ReBuild is for dads who are busy, committed to their family and ready to look after themselves too.</p>
            <p>You do not need to be in perfect shape or have a lot of free time. You only need to be willing to start.</p>
          </div>
        </div>
      </section>

      <section className="section section--blue">
        <div className="container">
          <h2>How it works</h2>
          {/* <ol> because these steps happen in order */}
          <ol className="path">
            {steps.map(([title, text]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CallToAction /> {/* Book a strategy call */}
    </>
  )
}