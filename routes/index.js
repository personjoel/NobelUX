var express = require('express');
var router = express.Router();

/* GET start page. */
router.get('/', function(req, res, next) {
  var date = new Date('December 10, 2020 12:00:00 GMT');
  
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

router.get('/result', function(req, res, next) {
  res.render('result', { title: 'Result page' });
});


module.exports = router;
