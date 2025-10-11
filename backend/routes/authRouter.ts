import experss from 'express'

const authRouter = experss.Router()

authRouter.post('/', (req, res) => {
    return res.json({message: 'Authentication API'})
})

export default authRouter