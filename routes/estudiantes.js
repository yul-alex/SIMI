var express = require('express');
var router = express.Router();
const { GetData } = require('../services/estudiantes')


/* GET home page. */
router.get('/estudiantes', GetData);


module.exports = router;