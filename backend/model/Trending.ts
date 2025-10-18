import { Schema } from 'mongoose'

const TrendingSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        default: 1
    }
})

export default TrendingSchema