import Anime from '../models/animeModel.js'

export const spotlight = async (req, res) => {
    try {
        const animes = await Anime.find({}).limit(5)
        if (animes.length > 0) {
            return res.json({success: true, animes: animes})
        } else {
            return res.json({success: false, message: 'No users added animes to their list'})
        }
    }catch(err) {
        res.status(404).json({success: false, message: err.message})
    }
    return res.json({success: true, message: 'Spotlight fetched successfully'})
}