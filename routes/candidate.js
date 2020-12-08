var express = require('express');
var router = express.Router();
var dateCheck = require('../node_functions/date.js');

router.get('/:id', function(req, res, next) {
  dateCheck.method();
  
  if (dateCheck.dates[1] >= dateCheck.dates[0]) {
    res.statusCode = 302;
    res.setHeader("Location", "http://localhost:3000");
    res.end();
  } else {
    res.render('candidate', { title: 'Ind. candidate page', id: req.params.id });
  }
});

module.exports = router;
