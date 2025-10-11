import bcrypt from 'bcrypt'
import mongoose from "mongoose";

const connectDB = (dbName: string) => {
    const DB_URL = process.env.DB_URL + dbName
    return mongoose.createConnection(DB_URL)
}

const generateHash = async (value: string) => {
    const saltRounds = 10
    const hash = await bcrypt.hash(value, saltRounds)
    return hash
}

export { connectDB, generateHash }