const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const phoneSchema = new Schema({

    id: {
        type: String
    },
   
    name: {
        type: String,
        trim: true,
        required: true
    },

    manufacturer: {
        type: String,
        trim: true,
        required: true,
    },

    description: {
        type: String,
        trim: true,
        required: true,
    },

    color: {
        type: String,
    },

    price: {
        type: Number,
        required: true,
    },

    imageFileName: {
        type: String,
    },

    screen: {
        type: String
    },

    processor: {
        type: String
    },

    ram: {
        type: Number,
    },

}, {
    timestamps: true
})

const Phone = mongoose.model("Phone", phoneSchema);

module.exports = Phone;