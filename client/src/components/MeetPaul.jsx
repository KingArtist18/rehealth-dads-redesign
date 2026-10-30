export default function MeetPaul() {
  return (
    <section className="section">
      <div className="container duo duo--reverse"> {/* Text left, photo right on desktop */}
        <div>
          <h2>Meet Paul</h2>
          {/* PLACEHOLDER COPY: replace with Paul's real story before publishing */}
          <p>I'm a dad who knows how hard it is to look after yourself when everyone needs you.</p>
          <p>I built ReHealth Dads to help fathers make steady progress without the guilt.</p>
        </div>
        <div className="photo">
          <img src="/images/shoulders-kitchen.jpg" alt="Paul with his son on his shoulders at home" />
        </div>
      </div>
    </section>
  )
}