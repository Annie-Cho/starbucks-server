import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    personal: String,
    prefer: String,
    pwd: String,
    phone: String,
    og: Object
})

export const User = new mongoose.model("User", UserSchema)
