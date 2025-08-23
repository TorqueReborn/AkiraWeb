import express from 'express'
import { animeByID, animeTrending } from '../controllers/animeController.js'

const animeRouter = express.Router()

animeRouter.get('/anime/:id', animeByID)
animeRouter.get('/trend', animeTrending)

export default animeRouter