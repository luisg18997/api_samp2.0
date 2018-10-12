const express = require('express');

const facultyRouter = express.Router();

const FacultyController = require('../controllers/facultyController.js');

facultyRouter.get('/', FacultyController.getAllFacultyList);

facultyRouter.get('/schoolList', FacultyController.getAllSchoolList);

facultyRouter.get('/instituteList', FacultyController.getAllInstituteList);

facultyRouter.get('/coordinationList', FacultyController.getAllCoordinationList);

facultyRouter.post('/school/departamentList', FacultyController.getAllDepartamentList);

facultyRouter.post('/institute/departamentList', FacultyController.getAllDepartamentList);

facultyRouter.post('/chairList', FacultyController.getAllChairList);

facultyRouter.post('/school', FacultyController.getSchool);

facultyRouter.post('/institute', FacultyController.getInstitute);

module.exports = facultyRouter;
