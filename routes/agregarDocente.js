var express = require('express');
var router = express.Router();
const { GetData } = require('../services/agregarDocente')

/* GET home page. */
router.get('/agregarDocente', GetData);


module.exports = router;