import express from 'express'

const router = express.Router()

router.get('/', (_, res) => {
  console.log('here===>')
  return res.status(200).json('hello')
})

export default router
