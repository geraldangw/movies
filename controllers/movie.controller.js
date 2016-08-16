var Movie = require('mongoose').model('Movie');

module.exports = {
  index: function(req, res, next) {
    Movie.find({}, function(err, movies) {
      res.json(movies);
    });
  },
  new: function(req, res) {
    res.render('movies/new', {
      title: 'Add Movie'
    });
  },
  create: function(req, res, next) {
    var movie = new Movie(req.body);
    movie.save(function(err, movie) {
      if (err) return next(err);
      res.json(movie);
    });
  }
};
