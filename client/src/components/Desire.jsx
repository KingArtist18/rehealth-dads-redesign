// Things dads actually want. Edit the text to change the copy.
const wants = [
  ['More energy for your kids', 'Keep up on the weekend without needing a nap.'],
  ['A body you trust', 'Feel strong and capable in your everyday life.'],
  ['A calmer head', 'Handle stress without taking it home with you.'],
]

export default function Desire() {
  return (
    <section className="section section--white"> {/* White background to separate it from the sections around it */}
      <div className="container duo"> {/* Photo on the left, text on the right */}
        <div className="photo">
          <img src="/images/couch-together.jpg" alt="A father and his son laughing together on the couch" />
        </div>
        <div>
          <h2>What you really want</h2>
          <p className="section__lead">You don't need a new life. You want to show up as the dad you already know you can be.</p>
          <ul className="rule-list">
            {wants.map(([title, text]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}