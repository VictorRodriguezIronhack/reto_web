const mongoose = require('mongoose')
const Schema = mongoose.Schema

const phoneSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "Untitled"
    },
    manufacturer: {
        type: String,
        default: "Unknown"
    },
    description: {
        type: String,
        required: true,
        default: "Vestibulum porta porttitor est eu interdum. Donec condimentum magna non purus ornare iaculis. Cras sed sem faucibus, eleifend mi eu, ultricies nibh. Mauris ut justo ante. Praesent feugiat, dui sit amet tristique pellentesque, purus urna pellentesque velit, at tempus nunc lectus vitae ex. Curabitur commodo ligula nec pharetra dignissim."
    },    
    color: {
        type: String,
        required: true,
        default: "black"
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    imageFileName: {
        type: String,
        default: "https://res.cloudinary.com/dmsx3xete/image/upload/v1610834382/creative-app/phone_x6yofz.png"
    },
    screen: {
        type: String,
        required: true,
        default: "Unknown"    
    },
    processor: {
        type: String,
        required: true,
        default: "Unknown"
    },
    ram: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
})

const Phone = mongoose.model('Phone', phoneSchema)

module.exports = Phone
