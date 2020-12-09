var express = require('express');
var router = express.Router();
var dateCheck = require('../node_functions/date.js');

router.get('/', function(req, res, next) {
  dateCheck.method();

  if (dateCheck.dates[1] >= dateCheck.dates[0]) {
    res.render('result', { title: 'Result page' });
  } else {
    res.render('index', { title: 'Canditates' });
  }
});

router.get('/result', function(req, res, next) {
  res.render('result', { title: 'Result page' });
});


module.exports = router;
