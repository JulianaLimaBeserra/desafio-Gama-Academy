const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controller');

routes.get('/', Usuario.index);

//Rotas de Usuario

routes.post('/api/usuarios', Usuario.create);
routes.get('/api/usuarios', Usuario.index);
routes.get('/api/usuarios.details', Usuario.details);

module.exports = routes;
