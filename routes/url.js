var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {
  if (req.params.id == '0') {
      res.send('https://nobeldata.herokuapp.com/vote/');
  }
});

module.exports = router;