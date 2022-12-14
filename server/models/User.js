const {Schema, model } = require('mongoose');

// Create a user schema
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  });

const User = model('Matchup', userSchema);

module.exports = User;