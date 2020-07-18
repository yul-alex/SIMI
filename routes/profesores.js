var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profesores', { title: 'Express', layout: 'admin' });
});

router.get('/', async (req, res, next) => {

 
  //const progreso = await query(`CALL progreso(${nombre}))`);
  const docente = await query('SELECT persona.nombre_persona FROM persona INNER JOIN rol ON persona.fk_rol = rol.id_rol WHERE rol.nombre_rol = "docente"');
  const institucion = await query('SELECT ie.nombre_insitucion FROM ie INNER JOIN persona ON persona.fk_ie = ie.id_insitucion');
  const foto = await query('SELECT persona.imagen_usuario FROM  persona  INNER JOIN rol ON persona.fk_rol = rol.id_rol  WHERE rol.nombre_rol = "docente"');
  res.render('profesores', { foto:foto, nombre: docente,  institucion: institucion, layout: 'admin', title: 'Docentes' })
});



module.exports = router;