var express = require('express');
var router = express.Router();
const { GetData } = require('../services/perfilDocente')
const { TraertData } = require('../services/perfilDocente')


/* GET home page. */
router.get('/perfilDocente', GetData);
router.gett('/perfilDocente', TraertData);


module.exports = router;