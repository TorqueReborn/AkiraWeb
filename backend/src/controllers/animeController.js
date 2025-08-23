import mongoose from "mongoose"
import User from "../models/userModel.js"

export const add = async (req, res) => {
    const { token, id, status = 'watching', progress = 0 } = req.body

    if (!token || !id) {
        return res.status(404).json({ success: false, message: 'Missing parameters' })
    }

    try {
        await mongoose.connect(`${process.env.MONGO_DB_URI}/users`)
        console.log('Connected to users database')

        const user = await User.findOne({ token })
        if (user) {
            const anime = await User.findOne({token, "anime.id":id})
            if (anime) {
                await User.findOneAndUpdate(
                    {
                        token,
                        "anime.id": id
                    },
                    {
                        "$set": {
                            "anime.$[elem].status": status,
                            "anime.$[elem].progress": progress
                        }
                    }, 
                    {
                        new: true,
                        arrayFilters: [{"elem.id": id}]
                    }
                )
            } else {
                user.anime.push({ id, status, progress })
                await user.save()
            }
            return res.json({ success: true, message: 'User anime approved' })
        } else {
            return res.json({ success: false, message: 'Invalid Token Sign in again' })
        }
    } catch (error) {
        return res.status(404).json({ success: false, message: error.message })
    } finally {
        await mongoose.disconnect()
        console.log('Disconnected from users database')
    }
}