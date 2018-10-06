const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit : 1,
    socketPath: '/cloudsql/' + 'naruto20-218323:us-central1:naruto20',
    user: 'naruto',
    password: 'naruto',
    database: 'naruto20'
});
exports.handler = function handler(req, res) {
    //using pool instead of creating connection with function call
    pool.query(`SELECT * FROM table where id = ?`, 
                                req.body.id, function (e, results) {
        //made reply here
    });
};