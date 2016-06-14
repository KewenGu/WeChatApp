
var express = require('express');
var path = require('path');
var url = require('url');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, function() {
  console.log('App is listening on port ' + port);
});
