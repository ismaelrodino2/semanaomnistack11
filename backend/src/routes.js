const express = require('express');

const OngController = require('./controllers/OngController'); 
const IncidentController = require('./controllers/IncidentController'); 
const ProfileController = require('./controllers/ProfileController'); 
const SessionController = require('./controllers/SessionController'); 

const routes = express.Router(); //desaclopando em umanova variável -> troco app por routes

routes.post('/sessions', SessionController.create);//fazer login é método post

routes.get('/ongs', OngController.index);//aqui retorna o array das ongs
routes.post('/ongs', OngController.create);//rotas

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete); //com o id do incidente q quer deletar

module.exports = routes;//aqui exporto no index importo