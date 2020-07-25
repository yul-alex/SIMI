var express = require('express');
var router = express.Router();
const { GetData } = require('../services/listarT')

/* GET home page. */
router.get('/listarT', GetData);

module.exports = router;