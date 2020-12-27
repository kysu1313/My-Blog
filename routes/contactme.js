
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('contactme', { title: 'Contact Me' });
});

module.exports = router;