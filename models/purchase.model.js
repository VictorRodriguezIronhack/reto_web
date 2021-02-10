const mongoose = require('mongoose')
const Schema = mongoose.Schema

const purchaseSchema = new Schema({
  phone: {
    type: Schema.Types.ObjectId,
    ref: 'Phone'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true })

module.exports = mongoose.model('Purchase', purchaseSchema)