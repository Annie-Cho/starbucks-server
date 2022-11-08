import mongoose from 'mongoose'

const CoffeeSchema = new mongoose.Schema({
    name: String,
    img: String
})

export const Coffee = mongoose.model("Coffee", CoffeeSchema)