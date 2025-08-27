import express from 'express'
import { animeByID, animeByIDs, animeTrending, animeEpisode } from '../controllers/allAnimeController.js'

const allAnimeRouter = express.Router()

allAnimeRouter.post('/ids', animeByIDs)
allAnimeRouter.post('/trending', animeTrending)

allAnimeRouter.post('/:id', animeByID)
allAnimeRouter.post('/:id/:episode', animeEpisode)

export default allAnimeRouter