import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectAllAnime from './util.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const API_BASE = 'https://api.allanime.day/api'

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

app.get('/latest', async (_, res) => {
    const url = `${API_BASE}?variables={}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"06327bc10dd682e1ee7e07b6db9c16e9ad2fd56c1b769e47513128cd5c9fc77a\"}}`
    const data = await connectAllAnime(url);
    if (data) {
        res.json(data);
    } else {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});