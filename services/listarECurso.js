var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);
/* GET home page. */

/* listar Estudiantes por Curso */
/* Falta lo el parametro para saber cual curso */
const GetData = async (req, res, next) => {
    console.log(req.params.id)
    try {
        const result = await query('select persona.nombre_persona,curso.pin_curso From curso INNER JOIN  inscripcion ON curso.id=inscripcion.fk_curso INNER JOIN persona On inscripcion.fk_estudiante=id_persona');
        console.log(result)
    } catch (error) {
        console.log('Error =>', error);
        res.send(error.sqlMessage);
    }

};

module.exports = {
    GetData
}

