var express = require('express');
var router = express.Router();

/* GET candidate display page. */
router.get('/', function(req, res, next) {
  res.render('candidate', { title: 'Candidates page :)' });
});

module.exports = router;
