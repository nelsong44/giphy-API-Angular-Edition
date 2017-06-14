//requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var base = require('./routes/base');
var giphy = require('./routes/giphy');

//globals
var port = process.env.PORT || 3000;

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', base); // base route
app.use('/giphy', giphy); // giphy route

//connect server
app.listen(port, function() {
  console.log('server listening on port ', port);
}); // end connect
