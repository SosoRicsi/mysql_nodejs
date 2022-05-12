var mysql = require('mysql');

var pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'userdb'
});

pool.getConnection(function(err, connection) {
   connection.query("INSERT INTO `users`(`user`, `password`) VALUES ('asd','gsad')", function(err, results) {
        console.log(results);
   }) 
});

pool.on('connection', function (connection) {
    console.log('Connected');
});

pool.end(function (err) {
    console.log('db connection ended');
}); 
