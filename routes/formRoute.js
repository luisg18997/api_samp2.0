const express = require('express');

const formRouter = express.Router();

const formController = require('../controllers/formController.js');

formRouter.get('/movementTypes', formController.getAllMovementTypeslist);

formRouter.get('/accountantTypes', formController.getAllAccountantTypeslist);

formRouter.get('/programTypes', formController.getAllProgramTypeslist);

formRouter.post('/ofice/addOfice', formController.addFormOfice);

formRouter.post('/movPersonal/addMovementPeronsal', formController.addFormMovementPersonal);

formRouter.post('/ofice/CodeOfice', formController.createCodeFormOfice);

formRouter.post('/movPersonal/CodeMovPer', formController.createCodeFormMovPer);

formRouter.post('/movPersonal/updateApproval', formController.updateMovPersonalApproval);

formRouter.post('/movPersonal', formController.getFormMovPersonal);

formRouter.post('/list', formController.getFormsList);

formRouter.post('/status/list', formController.getFormsStatusList);

formRouter.post('/ofice/List', formController.getFormOficesList);

formRouter.post('/official', formController.getFormOfficial);

formRouter.post('/official/approval/list', formController.getOfficialFormApprovalList);

formRouter.post('/official/rejected/list', formController.getOfficialFormRejectedList);

formRouter.post('/movPersonal/approval/list', formController.getMovPersonalFormApprovalList);

formRouter.post('/movPersonal/rejected/list', formController.getMovPersonalFormRejectedList);

formRouter.post('/official/updateApproval', formController.updateOfficialApproval);

module.exports = formRouter;
