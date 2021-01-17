const mongoose = require('mongoose')
const Schema = mongoose.Schema

const phoneSch = new Schema({
    id: { type: Number },
    name: {
        type: String,
        required: true
    },
    manufacturer: { type: String },
    description: { type: String },
    color: { type: String },
    price: { type: Number },
    img: { type: String },
    screen: { type: String },
    processor: { type: String },
    ram: { type: Number }
}, { timestamps: true }
)

const Phones = mongoose.model('Phone', phoneSch)
module.exports = Phones