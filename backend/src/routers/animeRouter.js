import express from 'express'
import { animeByID, animeTrending, animeVideo } from '../controllers/animeController.js'

const animeRouter = express.Router()

animeRouter.get('/anime/:id', animeByID)
animeRouter.get('/trending', animeTrending)
animeRouter.get('/anime/:id/:episode/video', animeVideo)

export default animeRouter