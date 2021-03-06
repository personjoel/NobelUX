var express = require('express');
var router = express.Router();
var dateCheck = require('../node_functions/date.js');

router.get('/', function(req, res, next) {
  dateCheck.method();
  
  if (dateCheck.dates[1] >= dateCheck.dates[0]) {
    res.statusCode = 302;
    res.setHeader("Location", "https://nobel-app.herokuapp.com/");
    res.end();
  } else {
    res.render('submitted', { title: 'Submitted page' });
  }
});

module.exports = router;