var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('estudiantes', { title: 'Express', layout: 'admin' });
});

router.get('/', async (req, res, next) => {

  const result = await query('SELECT persona.nombre_persona,persona.edad_persona,ie.nombre_insitucion FROM persona INNER JOIN rol ON persona.fk_rol = rol.id_rol INNER JOIN ie ON persona.fk_ie = ie.id_insitucion WHERE persona.id_persona = estudiante');
  
  const progreso = await query('CALL progreso(?)', result);
  //const progreso = await query(`CALL progreso(${nombre}))`);
 
  res.render('estudiantes', { estudiante:result, progreso:progreso, layout: 'admin', title: 'Estudiantes' })
});
module.exports = router;