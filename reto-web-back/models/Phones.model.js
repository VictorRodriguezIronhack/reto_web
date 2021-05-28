const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PhonesSchema = new Schema(
  {
    id:{type: Number},
    name: {String},
    manufacturer:{String},
    description:{String},
    color:{String},
    price:{Number},
    imageFileName:{String},
    screen:{String},
    processor:{String},
    ram:{Number},
  }
  ,
  { versionKey: false , timestamps:false }
)

const Phones = mongoose.model('Phones', PhonesSchema)

module.exports = Phones