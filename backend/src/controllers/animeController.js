import mongoose from "mongoose"
import User from "../models/userModel.js"

export const add = async (req, res) => {
    const {token} = req.body
    try {
        await mongoose.connect(`${process.env.MONGO_DB_URI}/users`)
        console.log('Connected to users database')
        const user = await User.findOne({token})
        if (user) {
            return res.json({success: true})
        } else {
            return res.json({success: false, message: 'Invalid Token Sign in again'})
        }
    } catch (error) {
        return res.status(404).json({success: false, message: 'Unable to connect to database'})
    } finally {
        await mongoose.disconnect()
        console.log('Disconnected from users database')
    }
}