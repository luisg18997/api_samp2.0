const express = require('express');

const employeeRouter = express.Router();

const EmployeeController = require('../controllers/employeeController.js');

employeeRouter.get('/statesList', EmployeeController.getAllStatesList);

employeeRouter.post('/municipalitiesList', EmployeeController.getAllMunicipalitiesList);

employeeRouter.post('/parishList', EmployeeController.getAllParishList);

module.exports = employeeRouter;