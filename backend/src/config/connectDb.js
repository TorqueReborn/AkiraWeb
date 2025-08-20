import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_DB_URI}${process.env.DATABASE_NAME}`)
        return {success: true, message: 'Connected to database'}
    } catch (error) {
        return {success: false, messMONGO_DB_URIage: 'Unable to connect to database'}
    }
}

export default connectDB