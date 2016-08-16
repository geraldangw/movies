// Mongoose stuff
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mymdb_db');


// Standard stuff
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', './views'); // set views to be in app/views folder.
app.set('view engine', 'ejs'); //set views to use ejs.
app.use(expressLayouts);

var Movie = require('./models/movie.model');

//Movie routes

require('./routes/movie.routes')(app);

var port = 4000;
app.set('port', port);

app.listen(app.get('port'), function() {
 console.log( "I am running on" + app.get('port'));
}
);
