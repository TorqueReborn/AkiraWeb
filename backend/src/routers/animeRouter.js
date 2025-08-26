import express from 'express'
import { spotlight } from '../controllers/animeController.js'

const animeRouter = express.Router()

animeRouter.get('/spotlight', spotlight)

export default animeRouter