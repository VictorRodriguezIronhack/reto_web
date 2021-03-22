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
    imageFileName: String,
    screen: String,
    processor: String,
    ram: Number
}, {
    timestamps: true
})

const Phone = mongoose.model("Phone", phoneSchema);

module.exports = Phone