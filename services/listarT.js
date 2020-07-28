var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../connection').Pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);
/* GET home page. */

/* listar tematicas */
const GetData = async  (req, res, next) => {
  
  const result = await query('SELECT  tema.nombre AS nombre, tipo_tema.tipo_tema AS tipo FROM tema INNER JOIN tipo_tema ON tema.fk_tipo_tema = tipo_tema.id_tipotema ');
   
  
  res.render('listarT', { tematicas: result, layout: 'admin', title: 'Estudiantes' })


}



const eliminar= async (req, res, next) => {
  try {
    const result = await query(`DELETE FROM marca WHERE id_marca = ${req.params.id}`);      
    res.json(result);     
  } catch (error) {
 
    res.send(error.sqlMessage);
  }
};



module.exports = {
  GetData
}