var express = require('express');
var router = express.Router();
const { GetData } = require('../services/agregarCurso')

/* GET home page. */
router.get('/agregaCurso', GetData);


module.exports = router;