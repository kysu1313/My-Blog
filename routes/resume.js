
var express = require('express');
var router = express.Router();


router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Resume' });
});