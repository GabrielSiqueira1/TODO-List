<<<<<<< HEAD
const express = require('express');
const tasksController = require('./controllers/tasksController');
const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksController.createTask);
=======
const express = require("express");

const router = express.Router();

// Rota. Quando o servidor realizar um get, a resposta será 200 com o print de Olá Mundo
// Cada uma das rotas executam tarefas diferentes
>>>>>>> 43685fa (Ajustes)

module.exports = router;
