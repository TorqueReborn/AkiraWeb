import express from 'express'
import { forgot, login, register } from '../controllers/authController.js'

const authRouter = express.Router()

authRouter.post('/login', login)
authRouter.post('/forgot', forgot)
authRouter.post('/register', register)

export default authRouter