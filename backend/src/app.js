<<<<<<< HEAD
const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json());
=======
const express = require("express"); // Requisição do módulo
const router = require("./router"); // Rotas

const app = express(); // Instância

>>>>>>> 43685fa (Ajustes)
app.use(router);

module.exports = app;
