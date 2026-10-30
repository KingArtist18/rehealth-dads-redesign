// Each win is [title, description]. They appear in order along the copper path.
const wins = [
  ['Move for ten minutes', 'A walk with the kids counts. Start where you are.'],
  ['Make one better choice at a meal', 'No strict plan, just one swap you can repeat.'],
  ['Protect your sleep', 'Set a regular bedtime and keep it for a week.'],
  ['Check in with yourself', 'Note what worked, then build on it next week.'],
]

export default function SmallWins() {
  return (
    <section className="section section--blue"> {/* Blue gradient background with white text */}
      <div className="container wins"> {/* Two columns: path left, photo right */}
        <div>
          <h2>One small win at a time</h2>
          <p className="section__lead">Progress is a series of steps you can actually keep.</p>
          {/* <ol> is an ordered list, used because these steps happen in sequence */}
          <ol className="path">
            {wins.map(([title, text]) => (
              <li key={title}> {/* CSS draws a green dot on the copper line for each one */}
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="photo">
          <img src="/images/play-vacuum.jpg" alt="A father helping his son with a toy" />
        </div>
      </div>
    </section>
  )
}