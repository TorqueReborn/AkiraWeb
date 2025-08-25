import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import nodemailer from 'nodemailer'
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

export const forgot = async (req, res) => {
    const { email } = req.body

    if (!email) {
        return res.json({ success: false, message: 'Enter email to continue' })
    }

    try {
        await mongoose.connect(`${process.env.MONGO_DB_URI}/users`)
        console.log('Connected to database users')

        const user = await User.findOne({ email })

        const salt = await bcrypt.genSalt(10)
        const refreshToken = await bcrypt.hash(email, salt)

        user.refreshToken = refreshToken
        await user.save()

        const resetLink = `http://localhost:3000/api/auth/verify/${refreshToken}`

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        (async () => {
            const info = await transporter.sendMail({
                from: process.env.SMTP_MAIL,
                to: email,
                subject: "Akira Password Reset",
                text: "",
                html: `<p>Click below link to reset 👇</p><br><a href=${resetLink}>Reset</a>`,
            });

            console.log("Message sent:", info.messageId);
        })();

    } catch (error) {
        return res.status(404).json({ success: false, message: 'Email not registered', error: error.message })
    } finally {
        await mongoose.disconnect()
        console.log('Disconnected from users database')
    }

    return res.json({ success: true })
}

export const verify = async (req, res) => {
    const { token } = req.params
    const { password } = req.body

    try {
        await mongoose.connect(`${process.env.MONGO_DB_URI}/users`)
        console.log('Connected to database users')

        const user = await User.findOne({ refreshToken: token })
        if (user) {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            user.password = hashedPassword
            await user.save()
        } else {
            return res.json({ success: false, message: 'Invalid Refresh Token' })
        }

    } catch (error) {
        return res.status(404).json({ success: false, message: 'Invalid Refresh Token', error: error.message })
    } finally {
        await mongoose.disconnect()
        console.log('Disconnected from users database')
    }

    return res.json({ success: true })
}