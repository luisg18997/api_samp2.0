const express = require('express');

const facultyRouter = express.Router();

const FacultyController = require('../controllers/facultyController.js');

facultyRouter.get('/', FacultyController.getAllFacultyList);

facultyRouter.get('/schools', FacultyController.getAllSchoolList);

facultyRouter.get('/institutes', FacultyController.getAllInstituteList);

facultyRouter.get('/coordinations', FacultyController.getAllCoordinationList);

facultyRouter.post('/school/departaments', FacultyController.getAllDepartamentList);

facultyRouter.post('/institute/departaments', FacultyController.getAllDepartamentList);

facultyRouter.post('/chairs', FacultyController.getAllChairList);

facultyRouter.post('/schools/getSchool', FacultyController.getSchool);

facultyRouter.post('/institutes/getInstitute', FacultyController.getInstitute);

module.exports = facultyRouter;
