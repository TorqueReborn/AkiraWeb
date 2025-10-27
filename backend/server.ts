import cors from 'cors'
import express from 'express'
import { configDotenv } from 'dotenv'
import authRouter from './routes/authRouter.ts'
import userRouter from './routes/userRouter.ts'
import animeRouter from './routes/animeRouter.ts'

configDotenv()
const app = express()
const PORT = process.env.PORT || 3000

app.use(
    cors({
        origin: process.env.FRONT_END_URL,
    })
)

app.use(express.json())
app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/anime', animeRouter)

app.get('/', (_, res) => {
    res.json({message: 'Server is running'})
})

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
})