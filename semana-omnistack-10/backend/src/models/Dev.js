const mongoose = require('mongoose');

const DevSchema = mongoose.Schema({
    name: String,
    git_username: String,
    avatar_url: String,
    techs: [String],
    bio: String
});

module.exports = mongoose.model('Dev', DevSchema);