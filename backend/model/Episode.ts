import { Schema } from 'mongoose'

const EpisodeSchema = new Schema({
    id_episode: {
        type: String,
        required: true
    },
    progress: {
        type: String,
        required: true
    }
})

export default EpisodeSchema