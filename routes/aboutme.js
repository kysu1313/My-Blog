
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});

module.exports = router;