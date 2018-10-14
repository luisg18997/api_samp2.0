const express = require('express');

const facultyRouter = express.Router();

const FacultyController = require('../controllers/facultyController.js');

facultyRouter.get('/', FacultyController.getAllFacultyList);

facultyRouter.get('/schools', FacultyController.getAllSchoolList);

facultyRouter.get('/institutes', FacultyController.getAllInstituteList);

facultyRouter.get('/coordinations', FacultyController.getAllCoordinationList);

facultyRouter.post('/school/departaments', FacultyController.getAllDepartamentBySchoolList);

facultyRouter.post('/institute/departaments', FacultyController.getAllDepartamentByInstituteList);

facultyRouter.post('/school/departament/chairs', FacultyController.getAllChairList);

facultyRouter.post('/school', FacultyController.getSchool);

facultyRouter.post('/institute', FacultyController.getInstitute);

module.exports = facultyRouter;
