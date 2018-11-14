const express = require('express');

const formDataRouter = express.Router();

const formDataController = require('../controllers/formDataController.js');

formDataRouter.get('/movementTypes', formDataController.getAllMovementTypeslist);

formDataRouter.post('/ofice/addOfice', formDataController.addFormOfice);

formDataRouter.post('/movPersonal/addMovementPeronsal', formDataController.addFormMovementPersonal);

formDataRouter.get('/ofice/CodeOfice', formDataController.createCodeFormOfice);

module.exports = formDataRouter;
