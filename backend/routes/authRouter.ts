import experss from 'express'
import { signup } from '../controller/authController.ts'

const authRouter = experss.Router()

authRouter.post('/', (_, res) => {
    return res.json({ message: 'Authentication API' })
})

authRouter.post('/signup', (req, res) => {
    signup(req, res)
})

export default authRouter