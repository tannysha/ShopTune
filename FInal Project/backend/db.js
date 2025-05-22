const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '$Hubamc21', 
  database: 'shopTuneDB'
});

module.exports = db;