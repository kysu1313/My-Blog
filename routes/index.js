var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Code Nerd' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Code Nerd' });
});

router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});

router.get('/hacking', function(req, res, next) {
  res.render('hacking', { title: 'Hacking' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects!' });
});

router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Resume' });
});

router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact Me' });
});


module.exports = router;
