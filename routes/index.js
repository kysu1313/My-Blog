var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Code Nerd' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Code Nerd' });
});

router.use('/api/v1/posts', require('./projects'))

module.exports = router;
