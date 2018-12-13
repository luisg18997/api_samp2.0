const express = require('express');

const formDataRouter = express.Router();

const formController = require('../controllers/formController.js');

formDataRouter.get('/movementTypes', formController.getAllMovementTypeslist);

formDataRouter.post('/ofice/addOfice', formController.addFormOfice);

formDataRouter.post('/movPersonal/addMovementPeronsal', formController.addFormMovementPersonal);

formDataRouter.post('/ofice/CodeOfice', formController.createCodeFormOfice);

formDataRouter.post('/movPersonal/CodeMovPer', formController.createCodeFormMovPer);

module.exports = formDataRouter;
