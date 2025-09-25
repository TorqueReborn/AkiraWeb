import express from 'express'
import AkiraUser from '../model/AkiraUser.js'

const authRouter = express.Router()

authRouter.post('/signup', async (req, res) => {
    const newUser = new AkiraUser({user_id: 'kzjdbks', password: 'skdjbskjb'})
    const savedItem = await newUser.save()
    res.json({ success: true, message: 'You are inside signup' })
})

export default authRouter