import express from 'express'

const authRouter = express.Router()

authRouter.post('/signup', (req, res) => {
    res.json({ success: true, message: 'You are inside signup' })
})

export default authRouter