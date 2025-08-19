import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { connectAllAnime, connectSite } from './util.js';

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
        const animes = data.data.shows.edges.map(edge => {
            let thumbnail = edge.thumbnail;
            if (thumbnail && !thumbnail.includes('http')) {
                thumbnail = `https://wp.youtube-anime.com/aln.youtube-anime.com/${thumbnail}`;
            }

            return {
                id: edge._id,   
                name: edge.name,
                thumbnail: thumbnail,
            }
        });
        res.json(animes);
    } else {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.get('/server', async (_, res) => {
    const url = `https://api.allanime.day/api?variables={%22showId%22:%22ReooPAxPMsHM4KPMY%22,%22translationType%22:%22sub%22,%22episodeString%22:%221140%22}&extensions={%22persistedQuery%22:{%22version%22:1,%22sha256Hash%22:%225f1a64b73793cc2234a389cf3a8f93ad82de7043017dd551f38f65b89daa65e0%22}}`
    const data = await connectAllAnime(url);

    const sourceUrls = data.data.episode.sourceUrls;
    const test = sourceUrls.filter(source => source.sourceUrl.includes('--')).map(source => {
        let url = source.sourceUrl
        url = url.substring(2)
            .match(/.{1,2}/g)
            .map(hex => String.fromCharCode(parseInt(hex, 16) ^ 56))
            .join('')
            .replace('clock', 'clock.json');
        url = url.includes('clock') ? `https://allanime.day${url}` : url;

        return {
            name: source.sourceName,
            url: url,
        }
    })

    const urls = []

    for (const source of test) {
        if (!source.url.includes('clock')) {
            urls.push(source.url);
            continue
        }
        const siteData = await connectSite(source.url);
        if ('message' in siteData) {
            continue
        }
        siteData.links.map(link => {
            urls.push(link.link);
        })
    }

    if (data) {
        res.json(urls);
    } else {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});