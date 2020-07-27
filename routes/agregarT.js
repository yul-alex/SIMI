var express = require('express');
var router = express.Router();
const { GetData } = require('../services/agregarT')
const { postData } = require('../services/agregarT')

/* GET home page. */
router.get('/agregarT', GetData);
router.post('/agregarT', postData);

module.exports = router;