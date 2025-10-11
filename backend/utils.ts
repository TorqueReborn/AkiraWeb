import mongoose from "mongoose";

const connectDB = (dbName: string) => {
    const DB_URL = process.env.DB_URI + dbName
    return mongoose.createConnection(DB_URL)
}

export default connectDB