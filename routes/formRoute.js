const express = require('express');

const formRouter = express.Router();

const formController = require('../controllers/formController.js');

formRouter.get('/movementTypes', formController.getAllMovementTypeslist);

formRouter.post('/ofice/addOfice', formController.addFormOfice);

formRouter.post('/movPersonal/addMovementPeronsal', formController.addFormMovementPersonal);

formRouter.post('/ofice/CodeOfice', formController.createCodeFormOfice);

formRouter.post('/movPersonal/CodeMovPer', formController.createCodeFormMovPer);

formRouter.post('/movPersonal', formController.getFormMovPersonal);

module.exports = formRouter;
