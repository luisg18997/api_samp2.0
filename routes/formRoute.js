const express = require('express');

const formRouter = express.Router();

const formController = require('../controllers/formController.js');

formRouter.get('/movementTypes', formController.getAllMovementTypeslist);

formRouter.post('/ofice/addOfice', formController.addFormOfice);

formRouter.post('/movPersonal/addMovementPeronsal', formController.addFormMovementPersonal);

formRouter.post('/ofice/CodeOfice', formController.createCodeFormOfice);

formRouter.post('/movPersonal/CodeMovPer', formController.createCodeFormMovPer);

formRouter.post('/movPersonal', formController.getFormMovPersonal);

formRouter.post('/list', formController.getFormsList);

formRouter.post('/ofice/List', formController.getFormOficesList);

formRouter.post('/official', formController.getFormOfficial);

formRouter.post('/official/updateApproval', formController.updateOfficialApproval);

module.exports = formRouter;
