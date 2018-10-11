const express = require('express');

const employeeRouter = express.Router();

const EmployeeController = require('../controllers/employeeController.js');

employeeRouter.get('/statesList', EmployeeController.getAllStatesList);

module.exports = employeeRouter;
