import express from 'express'
import { login, register, updateUserGenre } from '../controllers/authController.js'

const authRouter = express.Router()

authRouter.post('/login', login)
authRouter.post('/register', register)
authRouter.post('/updateUser', updateUserGenre)

export default authRouter