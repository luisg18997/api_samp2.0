const express = require('express');

const processRouter = express.Router();

const ProcessController = require('../controllers/processController.js');

processRouter.post('/ProcessFormMovementPersonal', ProcessController.getAllProcessFormMovementPersonalList);

processRouter.post('/ProcessFormOfice', ProcessController.getAllProcessFormOficeList);

processRouter.post('/StatusProcessForm', ProcessController.getAllStatusProcessFormList);

module.exports = processRouter;
