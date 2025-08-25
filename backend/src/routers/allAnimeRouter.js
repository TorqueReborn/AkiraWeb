import express from 'express'
import { animeByID, animeByIDs, animeTrending, animeEpisode } from '../controllers/allAnimeController.js'

const allAnimeRouter = express.Router()

allAnimeRouter.post('/ids', animeByIDs)
allAnimeRouter.get('/trending', animeTrending)

allAnimeRouter.get('/:id', animeByID)
allAnimeRouter.get('/:id/:episode', animeEpisode)

export default allAnimeRouter