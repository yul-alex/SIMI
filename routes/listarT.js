var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('listarT', { title: 'Express', layout: 'admin' });
});

/* listar tematicas */
router.get('/', async (req, res, next) => {
  const result = await query('SELECT  tema.nombre, tipo_tema.tipo_tema FROM tema INNER JOIN tipo_tema ON tema.fk_tipo_tema = tipo_tema.id_tipotema ');
   
  res.render('listarE', { tematicas: result, layout: 'admin', title: 'Estudiantes' })


});
module.exports = router;