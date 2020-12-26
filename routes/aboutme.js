
var express = require('express');
var router = express.Router();


router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});