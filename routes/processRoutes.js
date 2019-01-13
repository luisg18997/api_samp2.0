const express = require('express');

const processRouter = express.Router();

const ProcessController = require('../controllers/processController.js');

processRouter.get('/MovPersonalForms', ProcessController.getAllProcessFormMovementPersonalList);

processRouter.get('/OfficialForms', ProcessController.getAllProcessFormOficeList);

processRouter.get('/StatusProcessForm', ProcessController.getAllStatusProcessFormList);

processRouter.post('/MovPersonalForm/UpdatAllColumns', ProcessController.updateAllColumnsProcessMovPersonalForm);

processRouter.post('/OfficialForm/UpdatAllColumns', ProcessController.updateAllColumnsProcessOfficialForm);

module.exports = processRouter;
