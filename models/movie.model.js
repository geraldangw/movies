//in users.js
var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true
  },
  publishedYear: Number,
  director: String,
  actors: String,
  published: {
    type: String,
    default: "MGM"
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
