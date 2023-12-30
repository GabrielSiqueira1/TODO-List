const express = require("express"); // Requisição do módulo
const router = require("./router"); // Rotas

const app = express(); // Instância

app.use(router);

module.exports = app;
