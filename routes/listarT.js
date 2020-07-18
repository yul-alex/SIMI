var express = require('express');
var router = express.Router();

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