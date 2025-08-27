const API_BASE = 'https://api.allanime.day/api'
const requiredData = '_id,englishName,thumbnail,description'

const connectAndFetchJson = async (variables, query) => {
    const url = `${API_BASE}?variables=${variables}&query=${query}`
    try {
        const response = await fetch(url, { headers: { 'Referer': 'https:allmanga.to' } })
        if (!response.ok) {
            return { success: false, message: 'Unable to retrieve anime' }
        }
        return response.json()
    } catch (error) {
        return { success: false, message: 'Unable to get anime' }
    }
}

export const animeByID = async (req, res) => {
    const variables = `{"id":"${req.params.id}"}`
    const query = `query($id:String!){show(_id:$id){${requiredData}}}`
    const data = await connectAndFetchJson(variables, query)
    return res.json(data.data.show)
}

export const animeByIDs = async (req, res) => {
    let {shows} = req.body
    const variables = `{"shows":[${shows.map(show => `"${show}"`)}]}`
    const query = `query($shows:[String!]!){showsWithIds(ids:$shows){${requiredData}}}`
    const data = await connectAndFetchJson(variables, query)
    return res.json(data.data.showsWithIds)
}

export const animeTrending = async (_, res) => {
    const variables = `{"type":"anime","size":10,"dateRange":1}`
    const query = `query($type:VaildPopularTypeEnumType!,$size:Int!,$dateRange:Int!){queryPopular(type:$type,size:$size,dateRange:$dateRange){recommendations{anyCard{${requiredData}}}}}`
    const data = await connectAndFetchJson(variables, query)
    return res.json(data.data.queryPopular.recommendations.map(recommend => recommend.anyCard))
}

export const animeEpisode = async (req, res) => {
    const variables = `{"showId": "${req.params.id}","episodeString":"${req.params.episode}","translationType": "sub"}`
    const query = `query($showId:String!,$episodeString:String!,$translationType:VaildTranslationTypeEnumType!){episode(showId:$showId,episodeString:$episodeString,translationType:$translationType){episodeInfo {vidInforssub}}}`
    const data = await connectAndFetchJson(variables, query)
    return res.json(`https://aln.youtube-anime.com${data.data.episode.episodeInfo.vidInforssub.vidPath}`)
}