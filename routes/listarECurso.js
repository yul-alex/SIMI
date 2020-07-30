var express = require('express');
var router = express.Router();
const { GetData } = require('../services/listarECurso')

/* GET home page. */
router.get('/listarECurso', GetData);

module.exports = router;