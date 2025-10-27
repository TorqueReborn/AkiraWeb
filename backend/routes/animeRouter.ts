import express from 'express'
import { episode, ids, latestEpisode, trending } from '../controller/animeController.ts'
import { updateEpisode } from '../controller/userController.ts'

const animeRouter = express.Router()

animeRouter.get('/ids', async (req, res) => {
    ids(req, res)
})

animeRouter.get('/episode', async (req, res) => {
    episode(req, res)
})

animeRouter.get('/trending', async (req, res) => {
    trending(req, res)
})

animeRouter.get('/latestEpisode', async (req, res) => {
    latestEpisode(req, res)
})

export default animeRouter