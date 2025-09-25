import dotenv from 'dotenv'
import express from 'express'
import startServer from './utils.js'
import authRouter from './routes/authRoute.js'

dotenv.config()
startServer()

const app = express()

app.use(express.json())
app.use('/auth', authRouter)