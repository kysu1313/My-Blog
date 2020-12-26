
var express = require('express');
var router = express.Router();


router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact Me' });
});