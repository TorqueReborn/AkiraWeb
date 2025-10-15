import { connectDB } from "../utils.ts";
import AnimeSchema from "../model/Anime.ts";
import EpisodeSchema from "../model/Episode.ts";
import type { Request, Response } from "express";

export const getWatching = async (
    req: Request<Record<string, any>>,
    res: Response<Record<string, any>>
) => {
    const db = connectDB(`akira_${req.params.username}`)
    const user = db.model('Watching', AnimeSchema)
    const animes = await user.find()
    return res.status(200).json(animes)
}

export const updateWatching = async (
    req: Request<Record<string, any>>,
    res: Response<Record<string, any>>
) => {
    if (!req.body || !req.body.username || !req.body.token) return res.status(404).send()
    const db = connectDB(`akira_${req.body.username}`)
    const user = db.model('Watching', AnimeSchema)
    await user.findOneAndUpdate(
        { id: req.body.id },
        { $addToSet: { watchedEpisodes: req.body.watched } },
        { new: true, upsert: true }
    )
    return res.status(200).send()
}

export const updateEpisode = async (
    req: Request<Record<string, any>>,
    res: Response<Record<string, any>>
) => {
    if (!req.body || !req.body.username || !req.body.token) return res.status(404).send()
    const db = connectDB(`akira_${req.body.username}`)
    const episode = db.model('Episode', EpisodeSchema)
    await episode.findOneAndUpdate(
        { id_episode: `${req.body.id}_${req.body.episode}` },
        { $set: { progress: req.body.progress } },
        { new: true, upsert: true }
    )
    res.json({message: "kdgkjshbd"})
}

export const dropWatching = async (
    req: Request<Record<string, any>>,
    res: Response<Record<string, any>>
) => {
    if (!req.body || !req.body.username || !req.body.token) return res.status(404).send()
    const db = connectDB(`akira_${req.body.username}`)
    const user = db.model('Watching', AnimeSchema)
    await user.findOneAndDelete({ id: req.body.id })
    return res.status(200).send()
}