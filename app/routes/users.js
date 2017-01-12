var express = require('express');
var router = express.Router();
var app         = express();
var jwt    = require('jsonwebtoken');
var config = require('../config');
var User   = require('../models/user');
var cookieParser = require('cookie-parser')

app.use(cookieParser())
app.set('superSecret', config.secret);

router.post('/', function(req, res) {
  User.findOne({
    name: req.body.name
  }, function(err, user) {
    if (err) throw err;
    // validation
    if (!user) {
      res.json({
        success: false,
        message: 'Authentication failed. User not found.'
      });
      return;
    }

    if (user.password != req.body.password) {
      res.json({
        success: false,
        message: 'Authentication failed. Wrong password.'
      });
      return;
    }

    // when valid -> create token
    var token = jwt.sign(user, app.get('superSecret'), {
      expiresIn: '7d'
    });
    res.cookie('space', token, {maxAge:3600*24*7, httpOnly:true});
    res.redirect('/users/'+req.body.name+'/input');
  });
});

// for create test user to db
router.get('/drobune_up', function(req, res) {
  var demo = new User({
    name: 'dro',
    password: 'bune'   // TODO: encrypt password
  });

  demo.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true});
  });
});

router.get('/:id(\\w+)', function(req, res) {
  res.json({
    success: true,
    message: 'id page'
  });
});

// Authentification Filter
router.use(function(req, res, next) {
  var token = req.cookies.space;

  // validate token
  if (!token) {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }
  jwt.verify(token, app.get('superSecret'), function(err, decoded) {
    if (err) {
      return res.json({
        success: false,
        message: 'Invalid token'
      });
    }

    // if token valid -> save token to request for use in other routes
    req.decoded = decoded;
    next();
  });
});

router.get('/:id(\\w+)/input', function(req, res) {
  res.json({
    success: true,
    message: 'input page'
  });
});


module.exports = router;
