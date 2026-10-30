import { useState } from 'react' // Lets the form remember what was typed

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: 'guide', message: '' }) // All form fields
  const [sent, setSent] = useState(false) // true after a successful submit
  const [error, setError] = useState('') // Error message to show, if any
  const [loading, setLoading] = useState(false) // true while the request is running

  // Updates one field when the person types
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault() // Stops the page from reloading
    setError('')
    setLoading(true)
    // The free guide goes to /api/subscribe, everything else to /api/contact
    const url = form.topic === 'guide' ? '/api/subscribe' : '/api/contact'
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form), // Sends the form as JSON
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setSent(true) // Show the thank-you message
    } catch (err) {
      setError(err.message || 'Could not send. Please try again.') // Show what went wrong
    } finally {
      setLoading(false)
    }
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

              {error && <p className="form__error" role="alert">{error}</p>} {/* Only shows if there is an error */}

              <button type="submit" className="btn btn--green" disabled={loading}>
                {loading ? 'Sending...' : 'Send'} {/* Button text changes while sending */}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}