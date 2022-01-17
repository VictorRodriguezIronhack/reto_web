const mongoose = require("mongoose");

const ProductosSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  manufacturer: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  color: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  imageFileName: {
    type: String,
    required: true,
    trim: true,
  },
  screen: {
    type: String,
    required: true,
    trim: true,
  },
  processor: {
    type: String,
    required: true,
    trim: true,
  },
  ram: {
    type: Number,
    required: true,
    trim: true,
  },
});

ProductosSchema.index({ nombre: "text" });

module.exports = mongoose.model("Producto", ProductosSchema);
