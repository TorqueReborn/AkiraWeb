import express from 'express'
import { addAnime, deleteAnime } from '../controllers/animeController.js'

const animeRouter = express.Router()

animeRouter.post('/addAnime', addAnime)
animeRouter.post('/deleteAnime', deleteAnime)

export default animeRouter