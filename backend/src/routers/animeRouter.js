import express from 'express'
import { animeByID, animeTrending } from '../controllers/animeController.js'

const animeRouter = express.Router()

animeRouter.get('/anime/:id', animeByID)
animeRouter.get('/trending', animeTrending)

export default animeRouter