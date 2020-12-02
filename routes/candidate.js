var express = require('express');
var router = express.Router();
var dateCheck = require('../node_functions/date.js');

router.get('/:id', function(req, res, next) {
  if (dateCheck[1] >= dateCheck[0]) {
    res.render('result', { title: 'Results' });
  } else {
    res.render('candidate', { title: 'Ind. candidate page', id: req.params.id });
  }
});

module.exports = router;
