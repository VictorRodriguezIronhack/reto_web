const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const productSchema = new Schema(
  {
    id: Number,
    name: String,
    manufacturer: String,
    description: String,
    color: String,
    price: Number,
    imageUrl: String,
    screen: String,
    processor: String,
    ram: Number
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
