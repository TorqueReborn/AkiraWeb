import express from 'express'

const userRouter = express.Router()

userRouter.post('/', (req, res) => {
    res.json({message: 'You are inside user route'})
})

export default userRouter