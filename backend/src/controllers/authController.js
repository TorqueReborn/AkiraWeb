import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import User from '../models/userModel.js'

const generateToken = ({ email }) => {
    const payload = { email }
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1s' })
}

export const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(404).json({ success: false, message: 'missing credentials' })
    }

    try {
        await mongoose.connect(`${process.env.MONGO_DB_URI}/users`)
        console.log('Connected to database users')

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ success: false, message: 'user not registered' })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const token = generateToken({ email })
            user.token = token
            await user.save()
            return res.json({ success: true, message: 'Logged in successfully', token: token })
        } else {
            return res.status(404).json({ success: false, message: 'Invalid Password' })
        }

    } catch (err) {
        return res.json({ successs: false, message: 'Unable to connect to database' })
    } finally {
        await mongoose.disconnect()
        console.log('Disconnected from users database')
    }
}

export const register = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(404).json({ success: false, message: 'missing credentials' })
    }

    try {
        await mongoose.connect(`${process.env.MONGO_DB_URI}/users`)
        console.log('Connected to database users')

        const user = await User.findOne({ email })
        if (user) {
            return res.status(404).json({ success: false, message: 'User already exists' })
        }
        
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        
        const token = generateToken({ email })
        const newUser = User({ email, password: hashedPassword, token })
        await newUser.save()

        return res.json({ success: true, message: 'User successfully registered', token: token })
    } catch (error) {
        return res.status(404).json({ success: false, message: 'Unable to create new user', error: error.message })
    } finally {
        await mongoose.disconnect()
        console.log('Disconnected from users database')
    }
}