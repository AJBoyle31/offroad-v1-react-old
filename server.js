var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var ip = require('ip');

var app = express();

var publicPathName = 'public';
var publicPath = path.join(__dirname, publicPathName);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(publicPath));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + 'index.html');
});

var server = app.listen(8080, function () {

  var host = ip.address();
  var port = server.address().port;

  console.log('Server listening at http://localhost:%s and http://%s:%s', port, host, port);

});