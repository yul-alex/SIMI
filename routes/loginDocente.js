var express = require('express');
var router = express.Router();
const { TraerData } = require('../services/loginDocente')


/* GET home page. */
router.get('/perfilDocente', TraerData);


module.exports = router;