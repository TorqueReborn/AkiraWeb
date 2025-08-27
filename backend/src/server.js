import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import authRouter from './routers/authRouter.js';
import userRouter from './routers/userRouter.js';
import animeRouter from './routers/animeRouter.js'
import allAnimeRouter from './routers/allAnimeRouter.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }));

mongoose.connect(process.env.MONGO_DB_URI).
    then(() => {
        console.log('Connected to database')
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`)
        });
    })
    .catch(err => {
        console.error('Database connection error: ', err)
        process.exit(1)
    })

app.get('/', async (_, res) => {
    res.json({ success: true, message: 'Welcome to Akira API' })
})

// Controllers
app.use('/api', animeRouter)
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/anime', allAnimeRouter)

process.on('SIGINT', () => {
    mongoose.disconnect(() => {
        console.log('Disconnected from database')
        process.exit(0)
    })
})