

var express = require('express');
//  config = require('./config/config');
var config = {port:3000};
var app = express();
app.use('files', express.static('public/files'))

//module.exports = require('./config/express')(app, config);

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

app.get('/', function (req, res, next) {
    res.send('Hello world')
});
