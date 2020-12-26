
var express = require('express');
var router = express.Router();


router.get('/hacking', function(req, res, next) {
  res.render('hacking', { title: 'Hacking' });
});