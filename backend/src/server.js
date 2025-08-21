import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { connectAllAnime } from './util.js';
import loginRouter from './controllers/loginController.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

app.get('/', (_, res) => {res.json({status: true, message: 'Welcome to Akira API'})})

// Controllers
app.use('/api', loginRouter)