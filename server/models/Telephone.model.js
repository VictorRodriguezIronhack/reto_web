const mongoose = require('mongoose')
const Schema = mongoose.Schema

const telephoneSchema = new Schema({
    name: {
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
    imageFileName: String,
    screen: {
        type: String,
        default: 'Unknown'
    },
    processor: {
        type: String,
        default: 'Unknown'
    },
    ram: Number,
    
}, {
    timestamps: true
})

const Telephone = mongoose.model('Telephone', telephoneSchema)
module.exports = Telephone