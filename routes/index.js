var express = require('express');
var router = express.Router();

/* GET start page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage :)' });
});

/* GET candidate display page. */
router.get('/candidate', function(req, res, next) {
  res.render('candidate', { title: 'Candidates page :)' });
});

/* GET result/winner display page. */
router.get('/result', function(req, res, next) {
  res.render('result', { title: 'Results page :)' });
});

/* GET submitted page. */
router.get('/submitted', function(req, res, next) {
  res.render('submitted', { title: 'Submitted page :)' });
});

module.exports = router;
