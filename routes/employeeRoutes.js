const express = require('express');

const employeeRouter = express.Router();

const EmployeeController = require('../controllers/employeeController.js');

employeeRouter.get('/states', EmployeeController.getAllStatesList);

employeeRouter.post('/states/municipalities', EmployeeController.getAllMunicipalitiesList);

employeeRouter.post('/Nacionalities', EmployeeController.getAllNacionalitiesList);

employeeRouter.post('/states/municipalities/parish', EmployeeController.getAllParishList);

 employeeRouter.post('/CategoryType', EmployeeController.getAllCategoryType);

 employeeRouter.post('/CategoryTypes', EmployeeController.getAllCategoryTypesList);

 employeeRouter.post('/ExecuntingUnit', EmployeeController.getAllExecuntingUnitList);

 employeeRouter.post('/IncomeType', EmployeeController.getAllIncomeTypeList);

 employeeRouter.post('/Ingress', EmployeeController.getAllIngressList);
 
  employeeRouter.post('/Documentations', EmployeeController.getAllDocumentationsList);
 
  employeeRouter.post('/IdacCodes/EmployeeIdacCode', EmployeeController.getAllEmployeeIdacCodeList);
 
  employeeRouter.post('/Salary/EmployeeSalariesFilterSalary', EmployeeController.getAllEmployeeSalariesFilterSalaryList);
 
  employeeRouter.post('/Salary/EmployeeSalariesSalary', EmployeeController.getAllEmployeeSalariesSalaryList);
 
  employeeRouter.post('/Genders', EmployeeController.getAllGendersList);
 
  employeeRouter.post('/IdacCodes/FilterVacantDateNotNull', EmployeeController.getAllIdacCodesFilterVacantDateNotNullList);
 
  employeeRouter.post('/IdacCodes/FilterVacantDateNull', EmployeeController.getAllIdacCodesFilterVacantDateNullList);
 
  employeeRouter.post('/IdacCodes', EmployeeController.getAllIdacCodesList);
 
  employeeRouter.post('/Salary/CategoryType', EmployeeController.getAllSalaryForCategoryTypeList);
 
  employeeRouter.post('/Salary/CategoryType/DedicationType', EmployeeController.getAllSalaryForDedicationTypeCategoryTypeList);
  
  employeeRouter.post('/Salary/DedicationType', EmployeeController.getAllSalaryForDedicationTypeList);
 
  employeeRouter.post('/Salary', EmployeeController.getAllSalaryList);


module.exports = employeeRouter;
 

