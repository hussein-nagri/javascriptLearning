const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  number: {
    type: Number
  },
  university: {
    type: Number
  },
  city: {
    type: Number
  },
  country: {
    type: Number
  },
  image: {
    type: Buffer
  }

});

module.exports = User = mongoose.model('users', UserSchema);