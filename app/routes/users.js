var express = require('express');
var router = express.Router();
var app         = express();

var User   = require('../models/user');

router.post('/', function(req, res) {

  User.findOne({
    name: req.body.name
  }, function(err, user) {
    if (err) throw err;
    console.log(req.body.name)
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
      expiresIn: '24h'
    });

    res.json({
      success: true,
      message: 'Authentication successfully finished.',
      token: token
    });
  });
});

// Authentification Filter
router.use(function(req, res, next) {
  // get token from body:token or query:token of Http Header:x-access-token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

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

router.get('/:id', function(req, req) {
  console.log("idddddd")
});

module.exports = router;
