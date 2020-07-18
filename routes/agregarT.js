var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('agregarT', { title: 'Express', layout: 'admin' });
});

/* agregar tematicas */
router.post('/', async (req, res, next) => {
  let {  nombre, fk_tipo_tema} = req.body;
  try {
    const result = await query("INSERT INTO test (nombre, fk_tipo_tema) VALUES (?,?)", [nombre], [fk_tipo_tema] );           
    res.json(result);
  } catch (error) {
    console.log('Error =>', error);
    res.send(error.sqlMessage);
  }
});

module.exports = router;