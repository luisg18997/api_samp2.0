const express = require('express');

const formDataRouter = express.Router();

const formDataController = require('../controllers/formDataController.js');

formDataRouter.get('/MovementTypes', formDataController.getAllMovementTypeslist);

module.exports = formDataRouter;
