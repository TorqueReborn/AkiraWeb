import express from 'express'
import { episode, ids, trending } from '../controller/animeController.ts'

const animeRouter = express.Router()

animeRouter.get('/ids', async (req, res) => {
    ids(req, res)
})

animeRouter.get('/trending', async (req, res) => {
    trending(req, res)
})

animeRouter.get('/episode', async (req, res) => {
    episode(req, res)
})

export default animeRouter