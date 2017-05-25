var express = require('express');
var bodyParser = require('body-parser');
var logger = require('./middleware/logger');

var app = express();

app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

require('./routes.js')(app);

app.listen(1337);
console.log('application is runing on port 1337');