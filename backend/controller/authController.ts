import connectDB from "../utils.ts";
import type { Request, Response } from "express";

const initialCheck = (req: Request<Record<string, any>>) => !req.body

export const signup = async (
    req: Request<Record<string, any>>,
    res: Response<Record<string, any>>
) => {
    if (initialCheck(req) && !req.body?.username && !req.body?.password) return res.status(404).send()

    const db = connectDB('akira')
    await db.close()

    return res.json({ message: 'This is signup' })
}