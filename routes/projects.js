var express = require('express');
var router = express.Router();


// const projects = require('./routes/projects');
// K:\PROGRAMS\JS\Code-Blog-Restored\models\post.model.js
// const post = require('../models/post.model.js')
const m = require('../helpers/middlewares')

router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Projects!' });
});

/* All posts */
router.get('/', async (req, res) => {
  await post.getPosts()
  .then(posts => res.json(posts))
  .catch(err => {
      if (err.status) {
          res.status(err.status).json({ message: err.message })
      } else {
          res.status(500).json({ message: err.message })
      }
  })
})

module.exports = router;