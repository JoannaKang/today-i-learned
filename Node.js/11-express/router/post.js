import express from 'express'

const router = express.Router()

router.get('/all', (req, res) => {
  res.status(201).send('GET: /posts')
})

router.post('/', (req, res) => {
  res.status(201).send('POST: /posts')
})

router.put('/', (req, res) => {
  res.status(201).send('PUT: /posts')
})

router.delete('/', (req, res) => {
  res.status(201).send('DELETE: /posts')
})

export default router