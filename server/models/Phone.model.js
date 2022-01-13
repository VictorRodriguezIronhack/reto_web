const { Schema, model } = require("mongoose");

const phoneSchema = new Schema(
    {
        id: Number,
        name: String,
        manufacturer: String,
        descriptions: String,
        color: String,
        price: Number,
        imageFileName: String,
        screen: String,
        processor: String,
        ram: Number,
    }
);

const Phone = model("Phone", phoneSchema );

module.exports = Phone; 