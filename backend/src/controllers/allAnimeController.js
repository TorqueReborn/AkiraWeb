const API_BASE = 'https://api.allanime.day/api'

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
    const { data, id } = req.body
    const variables = `{"id":"${id}"}`
    const query = `query($id:String!){show(_id:$id){${data}}}`
    const response = await connectAndFetchJson(variables, query)
    return res.json(response.data.show)
}

export const animeByIDs = async (req, res) => {
    let { shows, data } = req.body
    const variables = `{"shows":[${shows.map(show => `"${show}"`)}]}`
    const query = `query($shows:[String!]!){showsWithIds(ids:$shows){${data}}}`
    const response = await connectAndFetchJson(variables, query)
    return res.json(response.data.showsWithIds)
}

export const animeTrending = async (req, res) => {
    const { data } = req.body
    const variables = `{"type":"anime","size":10,"dateRange":1}`
    const query = `query($type:VaildPopularTypeEnumType!,$size:Int!,$dateRange:Int!){queryPopular(type:$type,size:$size,dateRange:$dateRange){recommendations{anyCard{${data}}}}}`
    const response = await connectAndFetchJson(variables, query)
    return res.json(response.data.queryPopular.recommendations.map(recommend => recommend.anyCard))
}

export const animeEpisode = async (req, res) => {
    const { id, episode, translationType } = req.body
    const variables = `{"showId": "${id}","episodeString":"${episode}","translationType": "${translationType}"}`
    const query = `query($showId:String!,$episodeString:String!,$translationType:VaildTranslationTypeEnumType!){episode(showId:$showId,episodeString:$episodeString,translationType:$translationType){episodeInfo {vidInforssub}}}`
    const data = await connectAndFetchJson(variables, query)
    return res.json(`https://aln.youtube-anime.com${data.data.episode.episodeInfo.vidInforssub.vidPath}`)
}