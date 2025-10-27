import express from 'express'
import { episode, ids, latestEpisode, serverUrl, recent, trending } from '../controller/animeController.ts'

const animeRouter = express.Router()

animeRouter.get('/ids', async (req, res) => {
    ids(req, res)
})

animeRouter.get('/episode', async (req, res) => {
    episode(req, res)
})

animeRouter.get('/recent', async (req, res) => {
    recent(req, res)
})

animeRouter.get('/trending', async (req, res) => {
    trending(req, res)
})

animeRouter.get('/latestEpisode', async (req, res) => {
    latestEpisode(req, res)
})

animeRouter.get('/server', async (req, res) => {
    serverUrl(req, res)
})

export default animeRouter