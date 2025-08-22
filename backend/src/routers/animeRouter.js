import express from 'express'
import {add} from '../controllers/animeController.js'

const animeRouter = express.Router()

animeRouter.post('/add', add)

export default animeRouter