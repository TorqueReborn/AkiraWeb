import Anime from '../models/animeModel.js'

export const spotlight = async (req, res) => {
    try {
        const animes = await Anime.find({}).limit(5)
        return res.json({success: true, animes: animes})
    }catch(err) {
        res.status(404).json({success: false, message: err.message})
    }
    return res.json({success: true, message: 'Spotlight fetched successfully'})
}