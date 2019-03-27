const express = require('express');

const employeeRouter = express.Router();

const EmployeeController = require('../controllers/employeeController.js');

employeeRouter.get('/states', EmployeeController.getAllStatesList);

employeeRouter.post('/states/municipalities', EmployeeController.getAllMunicipalitiesList);

employeeRouter.get('/Nacionalities', EmployeeController.getAllNacionalitiesList);

employeeRouter.get('/Documentations', EmployeeController.getAllDocumentationsList);

employeeRouter.post('/states/municipality/parish', EmployeeController.getAllParishList);

employeeRouter.post('/CategoryType', EmployeeController.getAllCategoryType);

employeeRouter.get('/CategoryTypes', EmployeeController.getAllCategoryTypesList);

employeeRouter.get('/DedicationTypes', EmployeeController.getAllDedicationTypesList);

employeeRouter.post('/ExecuntingUnits/Filter', EmployeeController.getAllExecuntingUnitFilter);

employeeRouter.post('/ExecuntingUnit', EmployeeController.getExecuntingUnit);

employeeRouter.get('/ExecuntingUnits', EmployeeController.getAllExecuntingUnitList);

employeeRouter.get('/IncomeTypes', EmployeeController.getAllIncomeTypeList);

employeeRouter.get('/Ingress', EmployeeController.getAllIngressList);

employeeRouter.get('/Documentations', EmployeeController.getAllDocumentationsList);

employeeRouter.get('/IdacCodes/EmployeeIdacCode', EmployeeController.getAllEmployeeIdacCodeList);

employeeRouter.get('/Salary/EmployeeSalariesFilterSalary', EmployeeController.getAllEmployeeSalariesFilterSalaryList);

employeeRouter.get('/Salary/EmployeeSalariesSalary', EmployeeController.getAllEmployeeSalariesSalaryList);

employeeRouter.get('/Genders', EmployeeController.getAllGendersList);

employeeRouter.post('/IdacCodes/FilterVacantDateNotNullExec', EmployeeController.getAllIdacCodesFilterVacantDateNotNullList);

employeeRouter.get('/IdacCodes/FilterVacantDateNull', EmployeeController.getAllIdacCodesFilterVacantDateNullList);

employeeRouter.get('/IdacCodes', EmployeeController.getAllIdacCodesList);

employeeRouter.post('/Salary/CategoryType', EmployeeController.getAllSalaryForCategoryTypeList);

employeeRouter.post('/Salary/CategoryType/DedicationType', EmployeeController.getSalaryDedicationTypeCategoryType);

employeeRouter.post('/Salary/DedicationType', EmployeeController.getAllSalaryForDedicationTypeList);

employeeRouter.get('/Salary', EmployeeController.getAllSalaryList);

employeeRouter.post('/list', EmployeeController.getEmployeesList);

employeeRouter.post('/', EmployeeController.getEmployee);

module.exports = employeeRouter;
