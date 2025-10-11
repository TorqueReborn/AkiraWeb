import express from 'express'
import { configDotenv } from 'dotenv'
import authRouter from './routes/authRouter.ts'
import userRouter from './routes/userRouter.ts'

configDotenv()
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/auth', authRouter)
app.use('/user', userRouter)

app.get('/', (_, res) => {
    res.json({message: 'Server is running'})
})

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
})