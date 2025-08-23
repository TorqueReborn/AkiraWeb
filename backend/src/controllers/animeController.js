const connectAndFetchJson = async (variables, query) => {
    const API_BASE = 'https://api.allanime.day/api'
    const url = `${API_BASE}?variables=${variables}&query=${query}`
    try {
        const response = await fetch(url, { headers: { 'Referer': 'https:allmanga.to' } })
        
        if (!response.ok) {
            return { success: false, message: 'Unable to retrieve anime' }
        }

        const data = await response.json()
        return data
    } catch (error) {
        return { success: false, message: 'Unable to get anime' }
    }
}

export const animeByID = async (req, res) => {
    const variables = `{"id":"${req.params.id}"}`
    const query = `query($id:String!){show(_id:$id){_id,name}}`
    const data = await connectAndFetchJson(variables, query)
    return res.json(data)
}

export const animeTrending = async (req, res) => {
    return res.json({success: true})
}