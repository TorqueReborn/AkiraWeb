import type { Request, Response } from "express";

const initialCheck = (req: Request<Record<string, any>>) => !!req.body

export const signup = (
    req: Request<Record<string, any>>,
    res: Response<Record<string, any>>
) => {
    if (initialCheck(req)) return res.status(404).send()

    return res.json({ message: 'This is signup' })
}