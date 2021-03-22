const mongoose = require("mongoose")

const phoneSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    manufacturer: String,
    description: String,
    color: String,
    price: {
        type: Number,
        require:true
    },
    image: {
        type: String,
        default: "https://res.cloudinary.com/abel-av/image/upload/v1616373546/reto_web/smartphone_cartoon_cjxsaq.jpg"
    },
    screen: String,
    processor: String,
    ram: Number
}, {
    timestamps: true
})

const Phone = mongoose.model("Phone", phoneSchema);

module.exports = Phone