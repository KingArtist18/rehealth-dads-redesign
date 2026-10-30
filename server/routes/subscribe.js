const express = require('express')
const fs = require('fs') // Lets us read and write files
const path = require('path') // Builds file paths that work on Windows

const router = express.Router() // A mini-app for this route
const file = path.join(__dirname, '..', 'data', 'subscribers.json') // Where signups are saved

// POST /api/subscribe - saves a free guide signup
router.post('/', (req, res) => {
  const { name, email } = req.body // Values sent by the form

  // Basic check: both fields are required and the email must look valid
  if (!name || !email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter your name and a valid email.' })
  }

  // Read the existing list, or start with an empty one
  const list = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : []
  list.push({ name, email, date: new Date().toISOString() }) // Add the new signup
  fs.writeFileSync(file, JSON.stringify(list, null, 2)) // Save the list back to the file

  res.json({ ok: true }) // Tell the website it worked
})

module.exports = router