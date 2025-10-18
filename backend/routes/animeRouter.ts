import express from 'express'

const animeRouter = express.Router()
const API_END_POINT = "https://api.allanime.day/api"

animeRouter.get('/ids', async (req, res) => {
    let QUERY = ''
    let VARIABLES = {}
    if (Array.isArray(req.query.ids)) {
        QUERY = `
            query($ids: [String!]!){
                showsWithIds(ids: $ids) {
                    name,
                    englishName,
                    thumbnail,
                }
            }
        `
        VARIABLES = {
            "ids": req.query.ids
        }
    } else {
        QUERY = `
            query($_id:String!) {
                show(_id:$_id) {
                    name,
                    englishName,
                    thumbnail
                }
            }
        `
        VARIABLES = {
            "_id": req.query.ids
        }
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