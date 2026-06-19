import { Router } from 'express'
import { ro } from 'zod/v4/locales'
import { validateBody, validateParams } from '../middleware/validations.ts'
import z, { string } from 'zod'

const router = Router()

const createHabitSchema = z.object({
  name: string(),
})

const completeHabitSchema = z.object({
  id: z.string(),
})
router.get('/', (req, res) => {
  res.json({ message: 'habits' })
})
router.get('/:id', (req, res) => {
  res.json({ message: 'get one habit' })
})
router.post('/', validateBody(createHabitSchema), (req, res) => {
  res.json({ message: 'created habit' }).status(201)
})
router.delete('/:id', (req, res) => {
  res.json({ message: 'Deleted habit' })
})
router.post(
  '/:id/complete',
  validateParams(completeHabitSchema),
  validateBody(createHabitSchema),
  (req, res) => {
    res.json({ message: 'Deleted habit' })
  },
)

export default router
