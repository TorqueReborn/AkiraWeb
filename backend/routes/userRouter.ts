import express from 'express'
import { dropWatching, getWatching, updateEpisode, updateWatching } from '../controller/userController.ts'

const userRouter = express.Router()

userRouter.post('/drop', async (req, res) => {
    dropWatching(req, res)
})

userRouter.post('/episode', async (req, res) => {
    updateEpisode(req, res)
})

userRouter.post('/watching', async (req, res) => {
    updateWatching(req, res)
})

userRouter.get('/watching/:username', async (req, res) => {
    getWatching(req, res)
})

export default userRouter