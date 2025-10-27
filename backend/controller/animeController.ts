import type { Request, Response } from "express"

const SERVER_END_POINT = "https://allanime.day"
const API_END_POINT = "https://api.allanime.day/api"

function decrypt(hexStr: string) {
    let result = "";
    for (let i = 2; i < hexStr.length; i += 2) {
        const byte = parseInt(hexStr.slice(i, i + 2), 16) ^ 56;
        result += String.fromCharCode(byte);
    }
    return result;
}

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

export const serverUrl = async (
    req: Request<Record<string, any>>,
    res: Response<Record<string, any>>
) => {
    const { server } = req.query
    if (!server) return res.status(404).send()
    let decryptedUrl = decrypt(server as string)
    if (decryptedUrl.includes("clock")) {
        const clockUrl = `${SERVER_END_POINT}${decryptedUrl}`.replace("clock", "clock.json")
        const response = await fetch(clockUrl)
        const data = await response.json()

        const firstLink = data.links?.[0]?.link
        if (firstLink) return res.json({ server: firstLink })
    }
    return res.status(404).send()
}

export const latestEpisode = async (
    req: Request<Record<string, any>>,
    res: Response<Record<string, any>>
) => {
    if (!req.query.id || !req.query.type || !req.query.episode) return res.status(404).send()
    const QUERY = `
        query($showId: String!, $translationType: VaildTranslationTypeEnumType!, $episodeString: String!){
            episode(showId: $showId, translationType: $translationType, episodeString: $episodeString) {
                sourceUrls
            }
        }
    `
    const VARIABLES = {
        "showId": req.query.id,
        "translationType": req.query.type,
        "episodeString": req.query.episode
    }
    let json = await getResponseJSON(QUERY, VARIABLES);
    let sourceUrls = json.data.episode.sourceUrls
        .filter((source: any) => source.sourceUrl.includes("--"))
        .map((source: any) => ({ enc: source.sourceUrl }))
    return res.json(sourceUrls);
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

export const recent = async (
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

export const trending = async (
    req: Request<Record<string, any>>,
    res: Response<Record<string, any>>
) => {
    const QUERY = `
        query($type: VaildPopularTypeEnumType!, $size: Int!, $dateRange: Int!){
            queryPopular(type: $type, size: $size, dateRange: $dateRange) {
                recommendations {
                    anyCard {
                       _id,name,englishName,thumbnail
                    }
                }
            }
        }
    `
    const VARIABLES = {
        "type": "anime",
        "size": 20,
        "dateRange": 1
    }
    const json = await getResponseJSON(QUERY, VARIABLES)
    const edges = json.data.queryPopular.recommendations
    const fixedThumbnail = edges.map((edge: any) => ({
        ...edge.anyCard,
        englishName: edge.anyCard.englishName || edge.anyCard.name,
        thumbnail: (edge.anyCard.thumbnail as string).includes("http")
            ? edge.anyCard.thumbnail
            : `https://wp.youtube-anime.com/aln.youtube-anime.com/${edge.anyCard.thumbnail}`
    }))
    return res.json(fixedThumbnail)
}