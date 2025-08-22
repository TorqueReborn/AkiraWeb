import express from 'express'
import {test} from '../controllers/animeController.js'

const animeRouter = express.Router()

animeRouter.post('/', test)

export default animeRouter