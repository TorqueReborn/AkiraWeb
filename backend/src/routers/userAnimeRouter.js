import express from 'express'
import { addAnime, deleteAnime } from '../controllers/userAnimeController.js'

const userAnimeRouter = express.Router()

userAnimeRouter.post('/addAnime', addAnime)
userAnimeRouter.post('/deleteAnime', deleteAnime)

export default userAnimeRouter