const mongoose = require('mongoose')
const Schema = mongoose.Schema

const phoneSchema = new Schema ({
    name: String,
    brand: String,
    description: String,
    price: [Number],
    discount: Number,
    imageUrl: [String],
    color: [String],
    rating: Number,
    storage: [Number]
}, {
    timestamps: true
})

const Telefono = mongoose.model('Telefono', phoneSchema)
module.exports = Telefono

