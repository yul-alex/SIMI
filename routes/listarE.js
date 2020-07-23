var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('listarE', { title: 'Express', layout: 'admin' });
});

/* listar estrategias */
router.get('/', async (req, res, next) => {
  const result = await query('SELECT estrategia.actividad,tema.nombre FROM estrategia INNER JOIN tema ON estrategia.fk_inteligenca = tema.id AND estrategia.fk_tema = tema.id');
 
  res.render('listarE', { estrategias: result, layout: 'admin', title: 'Estudiantes' })


});
module.exports = router;