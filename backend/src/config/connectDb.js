import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_DB_URI}${process.env.DATABASE_NAME}`)
        console.log('Connected to Database')
    } catch (error) {
        console.log('Unable to connect to the Database')
    }
}

export default connectDB