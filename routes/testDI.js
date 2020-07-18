var express = require('express');
var router = express.Router();

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

/* agregar preguntas */
router.post('/', async (req, res, next) => {
  let {texto, imagen} = req.body;
  try {
    const result = await query("INSERT INTO pregunta (fk_tema, texto, imagen) VALUES (?,?,?)", [03], [texto] , imagen);           
    res.json(result);
  } catch (error) {
    console.log('Error =>', error);
    res.send(error.sqlMessage);
  }
});

/* agregar respuestas */
router.post('/', async (req, res, next) => {
  var {texto, validacion, imagen} = req.body;
  try {
    const result = await query("INSERT INTO respuesta (texto, validacion, imagen_respuesta) VALUES (?,?,?)", [texto] , [validacion], [imagen] );           
    
    res.json(result);
  } catch (error) {
    console.log('Error =>', error);
    res.send(error.sqlMessage);
  }
});

module.exports = router;