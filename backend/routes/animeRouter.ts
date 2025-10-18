import express from 'express'

const animeRouter = express.Router()
const API_END_POINT = "https://api.allanime.day/api"

animeRouter.get('/:id', async (req, res) => {
    const QUERY = `
        query($_id:String!) {
            show(_id:$_id) {
                name,
                englishName,
                thumbnail
            }
        }
    `
    const VARIABLES = {
        "_id": req.params.id
    }
    const response = await fetch(API_END_POINT, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            query: QUERY,
            variables: VARIABLES
        })
    })
    const json = await response.json()
    return res.json(json)
})

export default animeRouter