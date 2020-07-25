var express = require('express');
var router = express.Router();
const { GetData } = require('../services/profesores')



/* GET home page. */
router.get('/profesores', GetData);



module.exports = router;