const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',       // Mets ton mot de passe ici
  database: 'aoo2025'
});

module.exports = pool.promise();
