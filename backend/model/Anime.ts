import { Schema } from 'mongoose'

const AnimeSchema = new Schema({
    type: {
        type: String,
        enum: ['watching', 'dropped'],
        required: true,
        default: 'watching'
    },
    id: {
        type: String,
        required: true
    },
    watchedEpisodes: {
        type: [Number],
    }
})

export default AnimeSchema