var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('testIN', { title: 'Express', layout: 'admin' });
});


/* agregar test */
router.post('/', async (req, res, next) => {
  let {  nombre, cant_preguntas_test, tiempo_limite_test} = req.body;
  try {
    const result = await query("INSERT INTO test (nombre_test, cant_preguntas_test, tiempo_limite_test) VALUES (?,?)", [nombre], [cant_preguntas_test] , [tiempo_limite_test]);           
    res.json(result);
  } catch (error) {
    console.log('Error =>', error);
    res.send(error.sqlMessage);
  }
});

/* agregar preguntas */
router.post('/', async (req, res, next) => {
  var {texto} = req.body;
  try {
    const result = await query("INSERT INTO pregunta (fk_tema, texto, imagen) VALUES (?,?,?)", [02], [texto] , null);           
    res.json(result);
  } catch (error) {
    console.log('Error =>', error);
    res.send(error.sqlMessage);
  }
});

/* agregar respuestas */
router.post('/', async (req, res, next) => {
  var {texto, validacion} = req.body;
  try {
    const result = await query("INSERT INTO respuesta (texto, validacion) VALUES (?,?)", [texto] , [validacion] );           
    
    res.json(result);
  } catch (error) {
    console.log('Error =>', error);
    res.send(error.sqlMessage);
  }
});

module.exports = router;
