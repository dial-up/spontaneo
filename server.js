var express = require('express');
var fs = require('fs');
var app = express();
var path = __dirname + '/public/';

var app = express();
var port = process.env.PORT || 1337;
var yelpSearch = require('./yelpQueries.js');
// var request = require('request');

app.use(function(req,res,next) {
  console.log('/' + req.method + ' from ' + req.url);
  next();
});

app.get('/', function(req, res) {
  yelpSearch.yelpSearch;
  res.sendFile(path + 'index.html');
});


// do other stuff
app.use(express.static(__dirname + '/public'))
app.listen(port, function() {
  console.log('App listening on port 1337!');
});
