require('dotenv').config() // Reads PORT from the .env file
const express = require('express') // The web server framework
const cors = require('cors') // Allows the React site to call this server

const app = express() // Creates the server
app.use(cors()) // Turns on cross-origin requests
app.use(express.json()) // Lets the server read JSON sent by the form

// Each route file handles one kind of form
app.use('/api/subscribe', require('./routes/subscribe')) // Free guide signups
app.use('/api/contact', require('./routes/contact')) // Contact and strategy call messages

// A simple test URL to check the server is running
app.get('/api/health', (req, res) => res.json({ ok: true }))

const PORT = process.env.PORT || 5000 // Uses the .env port, or 5000 if missing
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))