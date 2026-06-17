import express from 'express'

const app = express()

app.get('/health', (req, res) => {
  // res.json({ message: 'Hello' }).status(200)
  res.send('<button>Click</button>')
})

// app.post('/cake', (req, res) => {
//   res.send('ok')
// })
app.post('/cake/:name/:id', (req, res) => {
  res.json(req.params)
})

export { app }

export default app
