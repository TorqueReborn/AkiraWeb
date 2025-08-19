import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { connectAllAnime, parseAnime } from './util.js';

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
    let url = `${API_BASE}?query={shows{edges{_id,name,thumbnail}}}`
    const data = await connectAllAnime(url);
    if (data) {
        const rawJSON = await data.json();
        res.json(parseAnime(rawJSON));
    } else {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.get('/server', async (_, res) => {
    const url = `https://api.allanime.day/api?variables={%22showId%22:%22ReooPAxPMsHM4KPMY%22,%22translationType%22:%22sub%22,%22episodeString%22:%221140%22}&extensions={%22persistedQuery%22:{%22version%22:1,%22sha256Hash%22:%225f1a64b73793cc2234a389cf3a8f93ad82de7043017dd551f38f65b89daa65e0%22}}`
    const data = await connectAllAnime(url);
    
    res.json(data)
});