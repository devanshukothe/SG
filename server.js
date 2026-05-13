const express = require('express')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 3000

// Enable CORS
app.use(cors())

// Parse JSON body
app.use(express.json())

// Simple GET Service
app.get('/HELLO', (req, res) => {

  res.send('Hello World')

})

// Simple POST Service
app.post('/submit', (req, res) => {

  console.log('Received Data:', req.body)

  res.json({
    success: true,
    message: 'POST request received successfully',
    receivedData: req.body
  })

})

// Start Server
app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`)

})