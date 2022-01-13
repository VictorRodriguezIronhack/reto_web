const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userName: {
    type: String,
    required: [true, 'Nombre obligatorio'],
    default: 'Unknown name',
    minlength: 3,
    maxlength: 100,
    trim: true,
    set: value => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true, 'Email obligatorio'],
    match: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,63})$/,
  },
  password: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
})

const User = model("User", userSchema);

module.exports = User;