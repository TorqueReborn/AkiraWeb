import mongoose from "mongoose"
import User from "../models/userModel.js"

export const addAnime = async (req, res) => {
    const { token, ids, status = 'watching', progress = 1 } = req.body

    if (!token || !ids || ids.length === 0) {
        return res.status(404).json({ success: false, message: 'Missing parameters' })
    }

    try {
        const user = await User.findOne({ token })
        if (user) {
            ids.forEach(async (id) => {
                const anime = await User.findOne({ token: token, "anime.id": id })
                if (anime) {
                    await User.updateOne({ token: token, "anime.id": id }, { $set: { "anime.$[element].status": status, "anime.$[element].progress": progress } }, { arrayFilters: [{ "element.id": id }] })
                } else {
                    user.anime.push({ id, status, progress })
                    await user.save()
                }
            });
            return res.json({ success: true })
        } else {
            res.status(404).json({ success: false, message: 'Invalid Token' })
        }
    } catch (err) {
        return res.status(500).json({ success: false, message: 'An unexpected error occured', error: err.message })
    }
}

export const deleteAnime = async (req, res) => {
    const { token, id } = req.body

    if (!token || !id) {
        return res.status(404).json({ success: false, message: 'Missing parameters' })
    }

    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log('Connected to users database')

        const user = await User.findOne({ token })
        if (!user) {
            return res.json({ success: false, message: 'Invalid Token Sign in again' })
        }

        user.anime.pull({ id })
        await user.save()
        return res.json({ success: true, message: 'User anime deleted' })
    } catch (error) {
        return res.status(404).json({ success: false, message: error.message })
    } finally {
        await mongoose.disconnect()
        console.log('Disconnected from users database')
    }
}