const mongoose = require('mongoose')
const Schema = mongoose.Schema

const phoneSchema = new Schema({
    title: {
        type: String,
        default: 'Unknown'
    },
    manufacturer: {
        type: String,
        default: 'Unknown'
    },
    description: {
        type: String,
        default: 'Unknown'
    },
    color: {
        type: String,
        default: 'Unknown'
    },
    price: Number,
    imageUrl: {
        type: String,
        default: 'Unknown'
    },
    screenSize: {
        type: String,
        default: 'Unknown'
    },
    processor: {
        type: String,
        default: 'Unknown'
    },
    ramMemory: Number,
    details: {
        type: String,
        default: 'Unknown'
    },
}, {
    timestamps: true
})

const Phone = mongoose.model('Phone', phoneSchema)
module.exports = Phone 