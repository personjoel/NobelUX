var express = require('express');
var router = express.Router();

/* GET start page. */
router.get('/', function(req, res, next) {
  var date = new Date('November 25, 2020 12:00:00 GMT');
  
  var dateNow = new Date();
  dateNow.setHours(dateNow.getHours() + 1);
  
  console.log(date);
  console.log(dateNow);

  if (dateNow >= date) {
    res.render('result', { title: 'Results' });
  } else {
    res.render('index', { title: 'Canditates' });
  }
});

/* GET candidate display page. */
router.get('/candidate', function(req, res, next) {
  res.render('candidate', { title: 'Candidates page :)' });
});

/* GET submitted page. */
router.get('/submitted', function(req, res, next) {
  res.render('submitted', { title: 'Submitted page :)' });
});

module.exports = router;
