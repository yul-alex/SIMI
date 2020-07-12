var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('listarE', { title: 'Express', layout: 'admin' });
});

/* listar estudiantes */
router.get('/', async (req, res, next) => {
  const result = await query('SELECT persona.id_persona, persona.nombre, producto.descripcion, producto.imagen, producto.disponible, producto.precio_venta, Count(*) AS cantidad, marca.nombre AS marca, categoria.nombre AS categoria FROM producto INNER JOIN item INNER JOIN marca ON producto.fk_id_marca = marca.id_marca INNER JOIN categoria ON producto.fk_id_categoria = categoria.id_categoria WHERE producto.id_producto = item.fk_id_producto AND item.estado = "disponible" GROUP BY producto.id_producto');
  const instituciones = await query('SELECT * FROM ie');
  const profesor = await query('SELECT  FROM rol');
  const docente = await query('SELECT * FROM rol');
  const proveedor = await query('SELECT * FROM proveedor');
  res.render('listarE', { proveedor: proveedor, layout: 'admin', title: 'Estudiantes' })


});
module.exports = router;