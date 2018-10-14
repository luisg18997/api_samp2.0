const express = require('express');

const facultyRouter = express.Router();

const FacultyController = require('../controllers/facultyController.js');

facultyRouter.get('/', FacultyController.getAllFacultyList);

facultyRouter.get('/schools', FacultyController.getAllSchoolList);

facultyRouter.get('/institutes', FacultyController.getAllInstituteList);

facultyRouter.get('/coordinations', FacultyController.getAllCoordinationList);

facultyRouter.post('/coordination', FacultyController.getCoordination);

facultyRouter.post('/school/departaments', FacultyController.getAllDepartamentBySchoolList);

facultyRouter.post('/institute/departaments', FacultyController.getAllDepartamentByInstituteList);

facultyRouter.post('/school/departament/chairs', FacultyController.getAllChairList);

facultyRouter.post('/school', FacultyController.getSchool);

facultyRouter.post('/institute', FacultyController.getInstitute);

facultyRouter.post('/school/departament', FacultyController.getDepartamentBySchool);

facultyRouter.post('/institute/departament', FacultyController.getDepartamentByInstitute);

facultyRouter.post('/school/departament/chair', FacultyController.getChair);

facultyRouter.post('/addFaculty', FacultyController.addFaculty);

facultyRouter.post('/updateFacultyAllColumns', FacultyController.updateFacultyAllColumns);

module.exports = facultyRouter;
