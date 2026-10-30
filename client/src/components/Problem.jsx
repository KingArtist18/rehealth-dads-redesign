// Each item is [title, description]. Edit the text here to change the copy.
const items = [
  ['Too many plans, no follow-through', 'You start strong, life gets busy, and the routine falls apart within weeks.'],
  ['Everyone else comes first', 'Work and family take every hour, so your own health is the first thing dropped.'],
  ['All-or-nothing thinking', 'One missed day feels like failure, so you quit instead of continuing.'],
]

export default function Problem() {
  return (
    <section className="section">
      <div className="container split"> {/* Two columns: heading left, list right */}
        <h2>What keeps good dads stuck</h2>
        <ul className="rule-list"> {/* List with copper lines between items */}
          {/* Loop over the items array and make one <li> for each */}
          {items.map(([title, text]) => (
            <li key={title}> {/* key helps React track each item */}
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}