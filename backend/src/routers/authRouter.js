import express from 'express'
import { login, register, verify } from '../controllers/authController.js'

const authRouter = express.Router()

authRouter.post('/login', login)
authRouter.post('/register', register)
authRouter.post('/verify', verify)

export default authRouter