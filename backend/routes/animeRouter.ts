import express from 'express'

const animeRouter = express.Router()

animeRouter.get('/', (req, res) => {
    return res.json({message: 'This is this'})
})

export default animeRouter