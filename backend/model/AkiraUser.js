import mongoose from 'mongoose'

const AkiraUserSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const AkiraUser = mongoose.model('AkiraUser', AkiraUserSchema)
export default AkiraUser