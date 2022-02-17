const express = require('express');
const route = express.Router();
const alunosController = require('./controllers/alunosController');

route.get('/alunos', alunosController.getAlunos);
route.post('/alunos', alunosController.postAlunos);
route.post('/tokens', alunosController.postLogin);

module.exports = route;