var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);

/* agregar Docente*/
const postData = async (req, res, next) => {
    let {nombre, fk_tipo_tema} = req.body;
    console.log("entro al post");
    try {
      const result = await query("INSERT INTO persona (nombre_persona,edad_persona, usuario, fk_ie,contraseña) VALUES (?,?)", [nombre], [fk_tipo_tema] );           
      res.json(result);
    } catch (error) {
      console.log('Error =>', error);
      res.send(error.sqlMessage);
    }
  }


/* traer un docente */
const TraerData = async (req, res, next) => {
    console.log(req.params.id)
    try {
      const result = await query(`SELECT persona.nombre_persona, persona.imagen_usuario, usuario.usser FROM rol INNER JOIN persona ON persona.fk_rol = rol.id_rol INNER JOIN Usuario ON persona.id_persona =usuario.fk_persona WHERE rol.nombre_rol = "docente" and persona.id_persona = '${req.params.id}'`);
      res.json(result);
    }
    catch (error) {
      console.log('Error =>', error);
      res.send(error.sqlMessage);
    }
  };
  
  
  
  const PostData = async (req, res, next) => {
    let {nombre_persona, usuario, contraseña} = req.body;
      try {
        const result = await query(`UPDATE persona INNER JOIN usuario ON usuario.fk_persona = persona.id_persona SET persona.nombre_persona = '?', usuario.usser= '?', usario.pasword='?'WHERE  id_persona = '${req.params.id}'`,  [nombre_persona], [usuario], [contraseña] );           
        res.json(result);
      } catch (error) {
        console.log('Error =>', error);
        res.send(error.sqlMessage);
      }
    };
    
 
    
    module.exports = {
      PostData,
      TraerData
    }