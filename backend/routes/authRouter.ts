import experss from 'express'
import { login, signup, verifyToken } from '../controller/authController.ts'

const authRouter = experss.Router()

authRouter.post('/', (_, res) => {
    return res.json({ message: 'Authentication API' })
})

authRouter.post('/login', (req, res) => {
    login(req, res)
})

authRouter.post('/signup', (req, res) => {
    signup(req, res)
})

authRouter.post('/verify', (req, res) => {
    verifyToken(req, res)
})

export default authRouter