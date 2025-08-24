import express from 'express'
import { animeByID, animeByIDs, animeTrending, animeEpisode } from '../controllers/animeController.js'

const animeRouter = express.Router()

animeRouter.post('/ids', animeByIDs)
animeRouter.get('/trending', animeTrending)

animeRouter.get('/:id', animeByID)
animeRouter.get('/:id/:episode', animeEpisode)

export default animeRouter