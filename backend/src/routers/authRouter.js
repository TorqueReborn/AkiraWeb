import express from 'express'
import { forgot, login, register, verify } from '../controllers/authController.js'

const authRouter = express.Router()

authRouter.post('/login', login)
authRouter.post('/forgot', forgot)
authRouter.post('/register', register)
authRouter.post('/verify/:token', verify)

export default authRouter