import express from 'express'
import userRoutes from './routes/userRoutes.ts'
import habitRoutes from './routes/habitRoutes.ts'
import authRoutes from './routes/authRoutes.ts'

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

app.use('/api/auth/', authRoutes)
app.use('/api/users/', userRoutes)
app.use('/api/habits/', habitRoutes)

export { app }

export default app
