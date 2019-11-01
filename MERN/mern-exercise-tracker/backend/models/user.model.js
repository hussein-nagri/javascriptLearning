const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//name of schema
const userSchema = new Schema({
  //single field: string
  username: {

    //validation to this username
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
    timestamps: true, //will create field when this was created
  });

const User = mongoose.model("User", userSchema);

module.exports = User;
