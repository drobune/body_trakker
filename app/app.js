require('dotenv').config();

var express     = require('express');
var path = require('path');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var config = require('./config');
var port = process.env.PORT || 8080;

var mongoose    = require('mongoose');
mongoose.connect(config.database);

var jwt    = require('jsonwebtoken');

var index = require('./routes/index');
var users = require('./routes/users');

var app         = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('superSecret', config.secret);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'))

app.use(morgan('dev'));

app.use('/', index);
app.use('/users', users);

app.listen(port);
console.log('Run at http://localhost:' + port);
