import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {type: String, required: false, default: ''},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

const User = mongoose.model('User', userSchema)

export default User