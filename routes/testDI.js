var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('testDI', { title: 'Express', layout: 'admin' });
});

/* GET crear tet */
router.post('/', async (req, res, next) => {
  let {  nombre, cant_preguntas_test} = req.body;
  try {
    const result = await query("INSERT INTO test (nombre_test, cant_preguntas_test, tiempo_limite_test) VALUES (?,?)", [nombre], [cant_preguntas_test] , null);           
    res.json(result);
  } catch (error) {
    console.log('Error =>', error);
    res.send(error.sqlMessage);
  }
});



module.exports = router;