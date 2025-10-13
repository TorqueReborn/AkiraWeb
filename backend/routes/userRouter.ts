import express from 'express'
import { dropWatching, getWatching, updateWatching } from '../controller/userController.ts'

const userRouter = express.Router()

userRouter.get('/watching/:username', async (req, res) => {
    getWatching(req, res)
})

userRouter.post('/watching', async (req, res) => {
    updateWatching(req, res)
})

userRouter.post('/drop', async (req, res) => {
    dropWatching(req, res)
})

export default userRouter