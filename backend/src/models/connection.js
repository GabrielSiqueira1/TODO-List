<<<<<<< HEAD
const mysql = require('mysql2/promise');

require('dotenv').config();

const connection = mysql.createPool({
  host:process.env.MYSQL_HOST,
  user:process.env.MYSQL_USER,
  password:process.env.MYSQL_PASSWORD,
  database:process.env.MYSQL_DB,
=======
// Configuração da conexão do banco de dados
const mysql = require("mysql2/promise");

// Cria uma fila de conexões
const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
>>>>>>> 43685fa (Ajustes)
});

module.exports = connection;
