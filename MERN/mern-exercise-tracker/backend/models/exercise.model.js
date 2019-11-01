const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//name of schema
const exerciseSchema = new Schema({
  //single field: string
  username: {
    //validation to this username
    type: String,
    required: true
  },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
    timestamps: true, //will create field when this was created
  });

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;