const util = require('util');
const db = require('../connection').Pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);

const GetData = async (req, res, next) => { 
  //const result = await query();

  const inteligencia = await query('SELECT tema.nombre FROM tipo_tema INNER JOIN tema ON tema.fk_tipo_tema = tipo_tema.id_tipotema WHERE tema.nombre = "Inteligencias Multiples"');

  const tema = await query('SELECT tema.nombre FROM tipo_tema INNER JOIN tema ON tema.fk_tipo_tema = tipo_tema.id_tipotema WHERE tema.nombre = "Ingles"');

  res.render('agregarE',{ inteligencia: inteligencia, tema: tema, title: 'Express', layout: 'admin' });

}

module.exports = {
  GetData
}