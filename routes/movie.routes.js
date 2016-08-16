module.exports = function(app) {

  var Movie = require('../models/movie.model');
  var movieController = require('../controllers/movie.controller');


app.get('/movies/new', movieController.new);

  app.route('/movies')
    .get(movieController.index)
    .post(movieController.create);
      //
      // res.send('list all movie');
};
