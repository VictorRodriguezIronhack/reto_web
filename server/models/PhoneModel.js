const mongoose = require('mongoose')
const Schema = mongoose.Schema

const phoneSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: 'phone',
    },
    manufacturer: {
        type: String
    },
    description: { type: String },
    color: {
        type: String
    },
    price: {
        type: Number
    },
    imageFileName: { type: String },
    screen: {
        type: String
    },
    processor: {
        type: String
    },
    ram: {
        type: String
    },
}, {
    timestamps: true
})

const Phone = mongoose.model('Phone', phoneSchema)
module.exports = Phone