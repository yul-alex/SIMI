var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);
/* GET home page. */


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
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('agregarT', { title: 'Express', layout: 'admin' });
});

router.get('/', async (req, res, next) =>  {
  
  const result = await query('SELECT * FROM tipo_tema');

  res.render('agregarT', { tipo: result,  layout: 'admin', title: 'Agregar Tema' })

});


module.exports = router;