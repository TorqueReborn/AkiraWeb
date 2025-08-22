import mongoose, { Schema } from "mongoose";

const animeSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['watching', 'completed'],
        required: true
    },
    progress: {
        type: Number,
        required: false,
        default: 0
    }
})

const userSchema = new Schema({
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    token: {
        type: String, 
        required: false, 
        default: null
    },
    anime: [animeSchema]
})

const User = mongoose.model('User', userSchema)

export default User