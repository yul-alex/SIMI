var mysql = require('mysql');

var pool  = mysql.createPool({
    Host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'simi'
});

exports.pool = pool;