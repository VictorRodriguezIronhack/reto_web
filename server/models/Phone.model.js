const mongoose = require('mongoose')
const Schema = mongoose.Schema

const phoneSchema = new Schema({
    name: {
        type: String,
  },
    manufacturer: {
        type: String,
        default: 'Desconocido'
    },
    description: {
        type: String,
        default: 'Desconocido'
    },
    color: {
        type: String,
        default: 'Desconocido'
    },
    price: Number,
    image: {
        type: String,
        default: 'https://farm5.staticflickr.com/4363/36346283311_74018f6e7d_o.png'
    },
    screenSize: {
        type: String,
        default: 'Desconocido'
    },
    processor: {
        type: String,
        default: 'Desconocido'
    },
    ram: {
        type: Number, 
    },
    user: {
        
            type: Schema.Types.ObjectId,
            ref: 'users'
        
    },
    
}, { timestamps: true })


module.exports= mongoose.model('phone', phoneSchema)