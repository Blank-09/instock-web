import express from 'express'
import ViteExpress from 'vite-express'

const app = express()

// API Route
app.get('/api', (_, res) => {
  res.json({ message: 'Hello from server!' })
})

// Listening to the port 3000
ViteExpress.listen(app, 3000, () =>
  console.log('Server started at: http://localhost:3000/')
)
