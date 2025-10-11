import express from 'express'
import { connectDB } from '../utils.ts'
import AnimeSchema from '../model/Anime.ts'

const userRouter = express.Router()

userRouter.post('/', (req, res) => {
    res.json({ message: 'You are inside user route' })
})

userRouter.post('/watching', async (req, res) => {
    if (!req.body || !req.body.username || !req.body.token) return res.status(404).send()
    const db = connectDB(`akira_${req.body.username}`)
    const user = db.model('Watching', AnimeSchema)
    await user.create({
        id: 'jsdbdj',
        type: 'watching',
        watchedEpisodes: [1, 2, 3]
    })
    return res.json({ message: 'You are inside watching anime' })
})

export default userRouter