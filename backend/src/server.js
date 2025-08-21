import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/connectDb.js';
import authRouter from './routers/authRouter.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }));

connectDB()

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

app.get('/', async (_, res) => {
    res.json({ success: true, message: 'Welcome to Akira API' })
})

// Controllers
app.use('/api/auth', authRouter)