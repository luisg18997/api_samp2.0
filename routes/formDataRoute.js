const express = require('express');

const formDataRouter = express.Router();

const formDataController = require('../controllers/formDataController.js');

formDataRouter.get('/movementTypes', formDataController.getAllMovementTypeslist);

formDataRouter.post('/addOfice', formDataController.addFormOfice);

formDataRouter.post('/addMovementPeronsal', formDataController.addFormMovementPersonal);

module.exports = formDataRouter;
