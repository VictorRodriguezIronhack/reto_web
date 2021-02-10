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
  createdPhones: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Phone'
    }
  ],
  boughtPhones: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Phone'
    }
  ]
})

module.exports = mongoose.model('User', userSchema)