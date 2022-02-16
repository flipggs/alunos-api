const express = require('express');
const route = express.Router();
const alunosController = require('./controllers/alunosController');

route.get('/alunos', alunosController.getAlunos);

module.exports = route;