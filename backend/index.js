import dotenv from 'dotenv'
import express from 'express'
import startServer from './utils.js'
import authRouter from './routes/authRoute.js'

const app = express()

dotenv.config()
startServer(app)

app.use(express.json())
app.use('/auth', authRouter)