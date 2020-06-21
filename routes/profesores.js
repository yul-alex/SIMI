var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profesores', { title: 'Express', layout: 'admin' });
});

module.exports = router;