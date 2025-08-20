import express from 'express'
import connectDB from '../config/connectDb.js'
import User from '../models/userModel.js'

const loginRouter = express.Router()

loginRouter.get('/login', async (_, res) => {
    const connect = await connectDB()
    const newUser = User({
        name: 'anything',
        email: 'something',
        password: 'something',
    })
    const savedUser = await newUser.save()
    console.log(savedUser)
    res.json(connect)
})

export default loginRouter