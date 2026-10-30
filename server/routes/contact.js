const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()
const file = path.join(__dirname, '..', 'data', 'messages.json') // Where messages are saved

// POST /api/contact - saves a contact or strategy call request
router.post('/', (req, res) => {
  const { name, email, topic, message } = req.body

  if (!name || !email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter your name and a valid email.' })
  }

  const list = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : []
  list.push({ name, email, topic, message: message || '', date: new Date().toISOString() })
  fs.writeFileSync(file, JSON.stringify(list, null, 2))

  res.json({ ok: true })
})

module.exports = router