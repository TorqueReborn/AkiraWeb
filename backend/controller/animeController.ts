import type { Request, Response } from "express"

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

export const episode = async (
    req: Request<Record<string, any>>,
    res: Response<Record<string, any>>
) => {
    if (!req.query.id || !req.query.type || !req.query.episode) return res.status(404).send()
    const QUERY = `
        query($showId: String!, $translationType: VaildTranslationTypeEnumType!, $episodeString: String!){
            episode(showId: $showId, translationType: $translationType, episodeString: $episodeString) {
                episodeString,
                sourceUrls,
                episodeInfo{
                    thumbnails,
                    description,
                    vidInforssub,
                    vidInforsdub
                },
            }
        }
    `
    const VARIABLES = {
        "showId": req.query.id,
        "translationType": req.query.type,
        "episodeString": req.query.episode
    }
    let json = await getResponseJSON(QUERY, VARIABLES)
    const { thumbnails, vidInforssub, vidInforsdub } = json.data.episode.episodeInfo;
    const BASE_URL = 'https://aln.youtube-anime.com';
    const mappedThumbnails = thumbnails.map((t: string) =>
        t.includes('http') ? t : `${BASE_URL}${t}`
    );
    return res.json({
        thumbnails: mappedThumbnails,
        legacyVideoURL: `${BASE_URL}${vidInforssub.vidPath}`,
        legacyDubURL: vidInforsdub?.vidPath ? `${BASE_URL}${vidInforsdub.vidPath}` : null
    });
}

export const ids = async (
    req: Request<Record<string, any>>,
    res: Response<Record<string, any>>
) => {
    let QUERY = ''
    let VARIABLES = {}
    const REQUIRED_DATA = "availableEpisodesDetail"
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
                    _id,name,englishName,thumbnail
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