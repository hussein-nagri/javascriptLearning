const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  hackathon: {
    type: String,
    // required: true
  },
  userId: {
    type: String,
    required: true
  },
  interests: {
    type: Object
  },
  teamInterests: {
    type: Object
  },
  goal: {
    type: String
  },
  makeInterests: {
    type: String
  }
});

module.exports = Teams = mongoose.model('teams', TeamSchema);