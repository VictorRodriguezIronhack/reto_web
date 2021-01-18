const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mobileSchema = new Schema({
    id: Number,
    name: String,
    manufacturer: String,
    description: String,
    color: String,
    price: Number,
    imageFileName: String,
    screen: String,
    processor: String,
    ram: Number
}, {
    timestamps: true
})

const Mobile = mongoose.model('Mobile', mobileSchema)
module.exports = Mobile