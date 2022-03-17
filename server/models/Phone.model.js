const { Schema, model } = require("mongoose");

const phoneSchema = new Schema(
  {
    name: {
      type: String,
    },
   manufacturer:{
   type:String,
  },
  description:{
    type:String,
  },
  color:{
    type:String,
  },
  price:{
    type:String,
  },
  imagenFileName:{
    type:String,
  },
  processor:{
type:String,
  },
  screen:{
    type:String,
  },
  ram:{
    type:Number,
  },
},
  {
    timestamps: true,
  }
);

const Phone = model("Phone", phoneSchema);

module.exports = Phone;
