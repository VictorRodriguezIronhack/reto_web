const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Phone'
    },
    quantity: Number
}, {
    timestamps: true
})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order