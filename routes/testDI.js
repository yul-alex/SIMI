var express = require('express');
var router = express.Router();
const { GetData } = require('../services/testDI')
const { PostData } = require('../services/testDI')

/* GET home page. */
router.get('/testDI', GetData);
router.post('/testDI', PostData);

module.exports = router;