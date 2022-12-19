const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mysql://zo51v23qd4f3v5oj:lrfsr92mick63vv1@ohunm00fjsjs1uzy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/g5rkg50j1qwlylhm',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
