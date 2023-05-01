const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'OmkPri@26',
  database: 'studentdb',
});

module.exports = pool;