var express = require('express');
var router = express.Router();
const { GetData } = require('../services/respuestaIN')
const { PostData } = require('../services/respuestaIN')

/* GET home page. */
router.get('/respuestaIN', GetData);
router.get('/respuestaIN', PostData);

module.exports = router;