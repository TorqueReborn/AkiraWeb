import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    token: {type: String, required: false, default: null}
})

const User = mongoose.model('User', userSchema)

export default User