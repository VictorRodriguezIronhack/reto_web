const mongoose = require('mongoose')

const Schema = mongoose.Schema

const phoneSchema = new Schema(
  {
    id: {type: Number},
    name: {type: String},
    manufacturer: {type: String},
    color: {type: String},
    price: {type: Number},
    imageFileName: {type: String},
    screen: {type: String},
    processor: {type: String},
    ram: {type: Number}
}, { versionKey: false})


const Telephone = mongoose.model('Telephone', phoneSchema) 

module.exports = Telephone

