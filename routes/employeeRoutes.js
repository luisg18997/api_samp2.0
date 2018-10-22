const express = require('express');

const employeeRouter = express.Router();

const EmployeeController = require('../controllers/employeeController.js');

employeeRouter.get('/states', EmployeeController.getAllStatesList);

employeeRouter.post('/states/municipalities', EmployeeController.getAllMunicipalitiesList);

employeeRouter.get('/Nacionalities', EmployeeController.getAllNacionalitiesList);

employeeRouter.post('/states/municipalities/parish', EmployeeController.getAllParishList);

 employeeRouter.post('/CategoryType', EmployeeController.getAllCategoryType);

 employeeRouter.get('/CategoryTypes', EmployeeController.getAllCategoryTypesList;

 employeeRouter.post('/ExecuntingUnit', EmployeeController.getAllExecuntingUnit;

 employeeRouter.get('/ExecuntingUnitlist', EmployeeController.getAllExecuntingUnitList;

 employeeRouter.get('/IncomeType', EmployeeController.getAllIncomeTypeList;

 employeeRouter.get('/Ingress', EmployeeController.getAllIngressList;
 
  employeeRouter.get('/Documentations', EmployeeController.getAllDocumentationsList;
 
  employeeRouter.get('/IdacCodes/EmployeeIdacCode', EmployeeController.getAllEmployeeIdacCodeList;
 
  employeeRouter.get('/Salary/EmployeeSalariesFilterSalary', EmployeeController.getAllEmployeeSalariesFilterSalaryList;
 
  employeeRouter.get('/Salary/EmployeeSalariesSalary', EmployeeController.getAllEmployeeSalariesSalaryList;
 
  employeeRouter.get('/Genders', EmployeeController.getAllGendersList;
 
  employeeRouter.get('/IdacCodes/FilterVacantDateNotNull', EmployeeController.getAllIdacCodesFilterVacantDateNotNullList;
 
  employeeRouter.get('/IdacCodes/FilterVacantDateNull', EmployeeController.getAllIdacCodesFilterVacantDateNullList;
 
  employeeRouter.get('/IdacCodes', EmployeeController.getAllIdacCodesList;
 
  employeeRouter.post('/Salary/CategoryType', EmployeeController.getAllSalaryForCategoryTypeList;
 
  employeeRouter.post('/Salary/CategoryType/DedicationType', EmployeeController.getAllSalaryForDedicationTypeCategoryTypeList;
  
  employeeRouter.post('/Salary/DedicationType', EmployeeController.getAllSalaryForDedicationTypeList;
 
  employeeRouter.get('/Salary', EmployeeController.getAllSalaryList;


module.exports = employeeRouter;
 

