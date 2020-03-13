const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema = mongoose.Schema({
  name: String,
  git_username: String,
  avatar_url: String,
  techs: [String],
  bio: String,
  location: {
    type: PointSchema,
    index: '2dsphere',
  }
});

module.exports = mongoose.model('Dev', DevSchema);