import User from '../models/userModel.js'

export const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.json({ success: false, message: 'missing credentials' })
    }

    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.json({ success: false, message: 'unable to get user info' })
        }

        if (user.password === password) {
            res.json({ success: true, message: 'Logged in successfully' })
        } else {
            res.json({ success: false, message: 'Invalid credentials' })
        }
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}