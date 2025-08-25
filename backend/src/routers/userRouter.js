import express from 'express'
import { addAnime, deleteAnime } from '../controllers/userAnimeController.js'

const userRouter = express.Router()

userRouter.post('/addAnime', addAnime)
userRouter.post('/deleteAnime', deleteAnime)

export default userRouter