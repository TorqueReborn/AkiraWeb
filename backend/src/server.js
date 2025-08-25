import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import authRouter from './routers/authRouter.js';
import userRouter from './routers/userRouter.js';
import allAnimeRouter from './routers/allAnimeRouter.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

app.get('/', async (_, res) => {
    res.json({ success: true, message: 'Welcome to Akira API' })
})

// Controllers
app.use('/api/auth', authRouter)
app.use('/api/anime', allAnimeRouter)
app.use('/api/user', userRouter)