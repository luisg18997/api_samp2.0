const express = require('express');

const processRouter = express.Router();

const ProcessController = require('../controllers/processController.js');

processRouter.get('/ProcessFormMovementPersonal', ProcessController.getAllProcessFormMovementPersonalList);

processRouter.get('/ProcessFormOfice', ProcessController.getAllProcessFormOficeList);

processRouter.get('/StatusProcessForm', ProcessController.getAllStatusProcessFormList);

module.exports = processRouter;
