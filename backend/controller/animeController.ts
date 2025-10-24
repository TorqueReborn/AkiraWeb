import type { Request, Response } from "express"

const REQUIRED_DATA = "_id,name,englishName,thumbnail"
const API_END_POINT = "https://api.allanime.day/api"

const getResponseJSON = async (QUERY: string, VARIABLES: object) => {
    const response = await fetch(API_END_POINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: QUERY,
            variables: VARIABLES
        })
    })
    return await response.json()
}

export const ids = async (
    req: Request<Record<string, any>>,
    res: Response<Record<string, any>>
) => {
    let QUERY = ''
    let VARIABLES = {}
    if (Array.isArray(req.query.ids)) {
        QUERY = `
            query($ids: [String!]!){
                showsWithIds(ids: $ids) {
                    ${REQUIRED_DATA}
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
                    ${REQUIRED_DATA}
                }
            }
        `
        VARIABLES = {
            "_id": req.query.ids
        }
    }
    const json = await getResponseJSON(QUERY, VARIABLES)
    return res.json(json)
}

export const trending = async (
    req: Request<Record<string, any>>,
    res: Response<Record<string, any>>
) => {
    const QUERY = `
        query($search: SearchInput!){
            shows(search: $search) {
                edges {
                    ${REQUIRED_DATA}
                }
            }
        }
    `
    const VARIABLES = {
        "search": {
            "sortBy": "Recent"
        }
    }
    const json = await getResponseJSON(QUERY, VARIABLES)
    const edges = json.data.shows.edges
    const fixedThumbnail = edges.map((edge: any) => ({
        ...edge,
        englishName: edge.englishName || edge.name,
        thumbnail: (edge.thumbnail as string).includes("http")
            ? edge.thumbnail
            : `https://wp.youtube-anime.com/aln.youtube-anime.com/${edge.thumbnail}`
    }))
    return res.json(fixedThumbnail)
}