var express = require('express');
var router = express.Router();
const { GetData } = require('../services/perfilDocente')
const { PostData } = require('../services/perfilDocente')

/* GET home page. */
router.get('/preguntaDI', GetData);
router.post('/preguntaDI', PostData);

module.exports = router;