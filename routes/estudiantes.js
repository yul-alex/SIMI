var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('estudiantes', { title: 'Express', layout: 'admin' });
});

router.get('/', async (req, res, next) => {

  const nombre = await query('SELECT persona.nombre_persona FROM persona INNER JOIN rol ON persona.fk_rol = rol.id_rol WHERE rol.nombre_rol = "estudiante"');
  
  const progreso = await query('CALL progreso(?)', nombre);
  //const progreso = await query(`CALL progreso(${nombre}))`);
  const docente = await query('SELECT persona.nombre_persona FROM persona INNER JOIN rol ON persona.fk_rol = rol.id_rol WHERE rol.nombre_rol = "docente"');
  const edad = await query('persona.edad_persona FROM persona INNER JOIN rol ON persona.fk_rol = rol.id_rol WHERE rol.nombre_rol = "estudiante"');
  res.render('estudiantes', { edad: edad, nombre: nombre, docente:docente, progreso: progreso, layout: 'admin', title: 'Estudiantes' })
});
module.exports = router;