import mongoose, { Schema } from "mongoose";

const animeSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: false,
        default: 1
    }
})

const Anime = mongoose.model('Anime', animeSchema)
export default Anime