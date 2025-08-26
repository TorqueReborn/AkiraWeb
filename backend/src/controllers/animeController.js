import Anime from '../models/animeModel.js'

export const spotlight = async (req, res) => {
    try {
        const animes = await Anime.find({}).limit(5)
        if (animes.length > 0) {
            const ids = animes.map(anime => anime.id)
            const response = await fetch('http://localhost:3000/api/anime/ids', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({shows: ids})
            })
            const rawJSON = await response.json()
            return res.json({ success: true, animes: rawJSON })
        } else {
            return res.json({ success: false, message: 'No users added animes to their list' })
        }
    } catch (err) {
        res.status(404).json({ success: false, message: err.message })
    }
    return res.json({ success: true, message: 'Spotlight fetched successfully' })
}