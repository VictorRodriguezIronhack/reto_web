const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  boughtPhones: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Phone'
    }
  ]
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)