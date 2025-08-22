import mongoose, { Schema } from "mongoose";

const animeSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
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
    anime: {
        watching: [animeSchema],
        completed: [animeSchema]
    }
})

const User = mongoose.model('User', userSchema)

export default User