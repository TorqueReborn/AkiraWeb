import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import authRouter from './routers/authRouter.js';
import animeRouter from './routers/animeRouter.js';

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
app.use('/api/user', animeRouter)