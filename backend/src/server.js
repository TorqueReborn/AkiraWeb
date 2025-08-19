import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { connectAllAnime } from './util.js';

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
    let url = `${API_BASE}?query={shows{edges{_id,name,description,banner,thumbnail}}}`
    const data = await connectAllAnime(url);
    if (data) {
        const rawJSON = await data.json();
        res.json(rawJSON.data.shows.edges);
    } else {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.get('/spotlight', async (_, res) => {
    let url = `${API_BASE}?variables={"type":"anime","size":20,"dateRange":1}&query=query($type:VaildPopularTypeEnumType!,$size:Int!,$dateRange:Int!){queryPopular(type:$type,size:$size,dateRange:$dateRange){recommendations{anyCard{_id,name,description,banner,thumbnail}}}}`
    const data = await connectAllAnime(url);
    if (data) {
        const rawJSON = await data.json();
        res.json(rawJSON.data.queryPopular.recommendations.map(anime => {
            return anime.anyCard
        }))
    } else {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});