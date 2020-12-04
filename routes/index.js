var express = require('express');
var router = express.Router();
var dateCheck = require('../node_functions/date.js');

router.get('/', function(req, res, next) {
  var date = new Date('December 4, 2021 12:55:00 GMT');
  
  var dateNow = new Date();
  dateNow.setHours(dateNow.getHours() + 1);

  var dates = [date, dateNow];

  console.log(dates);

  if (dateNow[1] >= date[0]) {
    res.statusCode = 302;
    res.setHeader("Location", "https://nobel-app.herokuapp.com/");
    res.end();
  } else {
    res.render('index', { title: 'Canditates' });
  }
});

/**
router.get('/', function(req, res, next) {
  dateCheck.method();

  if (dateCheck.dates[1] >= dateCheck.dates[0]) {
    res.statusCode = 302;
    res.setHeader("Location", "https://nobel-app.herokuapp.com/");
    res.end();
  } else {
    res.render('index', { title: 'Canditates' });
  }
});
*/

router.get('/result', function(req, res, next) {
  res.render('result', { title: 'Result page' });
});


module.exports = router;
