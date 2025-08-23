import express from 'express'
import { animeByID } from '../controllers/animeController.js'

const animeRouter = express.Router()

animeRouter.get('/:id', animeByID)

export default animeRouter