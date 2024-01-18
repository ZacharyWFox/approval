var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// //TODO
// router.get('/createVote', (req, res, next) => {
//   return
// })

module.exports = router;
