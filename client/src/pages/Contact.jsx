import { useState } from 'react' // Lets the form remember what was typed

export default function Contact() {
  // One object holds all form fields
  const [form, setForm] = useState({ name: '', email: '', topic: 'guide', message: '' })
  const [sent, setSent] = useState(false) // true after the form is submitted

  // Updates one field when the person types
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault() // Stops the page from reloading
    // TODO (Step 5): send `form` to the Express server. For now we only show the thank-you message.
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Get in touch</h1>
          <p>Ask for the free guide or book a strategy call.</p>
        </div>
      </section>

      <section className="section">
        <div className="container form-wrap">
          {sent ? (
            // Shown after submitting
            <div className="panel">
              <h2>Thank you, {form.name}.</h2>
              <p>Your message has been received. Paul will be in touch soon.</p>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={form.name} onChange={handleChange} required />

              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />

              <label htmlFor="topic">What would you like?</label>
              <select id="topic" name="topic" value={form.topic} onChange={handleChange}>
                <option value="guide">The free guide</option>
                <option value="call">A strategy call</option>
                <option value="other">Something else</option>
              </select>

              <label htmlFor="message">Message (optional)</label>
              <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} />

              <button type="submit" className="btn btn--green">Send</button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}