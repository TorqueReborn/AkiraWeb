import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

export const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(404).json({ success: false, message: 'missing credentials' })
    }

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ success: false, message: 'user not registered' })
        }

        if (user.password === password) {
            const payload = { email: user.email, password: user.password }
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1m' })
            return res.json({ success: true, message: 'Logged in successfully', token: token })
        } else {
            return res.status(404).json({ success: false, message: 'Invalid Password' })
        }
    } catch (error) {
        return res.status(404).json({ success: false, message: error.message })
    }
}

export const register = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(404).json({ success: false, message: 'missing credentials' })
    }

    try {
        const user = await User.findOne({ email })
        if (user) {
            return res.status(404).json({ success: false, message: 'User already exists' })
        }
        const newUser = User({ email, password })
        await newUser.save()
        const payload = { email: newUser.email, password: newUser.password }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1m' })
        return res.json({ success: true, message: 'User successfully registered', token: token })
    } catch (error) {
        return res.status(404).json({ success: false, message: 'Unable to create new user', error: error.message })
    }
}