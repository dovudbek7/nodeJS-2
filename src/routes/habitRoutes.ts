import { Router } from 'express'
import { ro } from 'zod/v4/locales'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'habits' })
})
router.get('/:id', (req, res) => {
  res.json({ message: 'get one habit' })
})
router.post('/', (req, res) => {
  res.json({ message: 'created habit' }).status(201)
})
router.delete('/:id', (req, res) => {
  res.json({ message: 'Deleted habit' })
})
router.post('/:id/complete', (req, res) => {
  res.json({ message: 'Deleted habit' })
})

export default router
