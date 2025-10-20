import UserSchema from "../model/User.ts";
import type { Request, Response } from "express";
import { connectDB, generateHash } from "../utils.ts";

const initialCheck = (req: Request<Record<string, any>>) => !req.body

export const login = async (
    req: Request<Record<string, any>>,
    res: Response<Record<string, any>>
) => {
    if (initialCheck(req) && !req.body.password) return res.status(404).send()
    const db = connectDB('akira')
    const users = db.model('User', UserSchema)
    const search = await users.findOne({ username: req.body.username, password: req.body.password })
    if (!search) return res.status(404).send()
    const token = await generateHash(req.body.password)
    search.token = token
    await search.save()
    db.close()
    return res.status(200).send()
}

export const signup = async (
    req: Request<Record<string, any>>,
    res: Response<Record<string, any>>
) => {
    if (initialCheck(req) && !req.body?.username && !req.body?.password) return res.status(404).send()
    const db = connectDB('akira')
    const users = db.model('User', UserSchema)
    const token = await generateHash(req.body.username)
    const search = await users.findOne({ username: req.body.username })
    if (search) {
        db.close()
        return res.status(404).send()
    }
    await users.create({
        username: req.body.username,
        password: req.body.password,
        token
    })
    await db.close()
    return res.status(200).send()
}

export const verifyToken = async (
    req: Request<Record<string, any>>,
    res: Response<Record<string, any>>
) => {
    if (!initialCheck(req) && !req.body.token) return res.status(404).send()
    const db = connectDB('akira')
    const users = db.model('User', UserSchema)
    const search = await users.findOne({ username: req.body.username, token: req.body.token })
    if (search) {
        db.close()
        return res.json({ valid: true })
    }
    return res.status(404).send()
}