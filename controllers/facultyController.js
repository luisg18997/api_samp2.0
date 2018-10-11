const appName = 'FacultyController';
const debug = require('debug')(appName);

const FacultyModel = require('../models/facultyModel.js');

const facutly = 1;

const getAllFacultyList = (req, res) => {
  try {
    FacultyModel.getFacultyLists((err, facultyData) => {
      if (err) {
        const errFalcuty = {};
        errFalcuty.message = err;
        res.status(404).send(errFalcuty);
      } else {
        debug('FacultyController: ', facultyData);
        res.send(facultyData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getAllSchoolList = (req, res) => {
  try {
    FacultyModel.getSchoolLists(facutly, (err, schoolData) => {
      if (err) {
        const errSchool = {};
        errSchool.message = err;
        res.status(404).send(errSchool);
      } else {
        debug('FacultyController: ', schoolData);
        res.send(schoolData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getAllInstituteList = (req, res) => {
  try {
    FacultyModel.getInstituteLists(facutly, (instituteData) => {
      debug('FacultyController: ', instituteData);
      res.send(instituteData);
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getAllCoordinationList = (req, res) => {
  try {
    FacultyModel.getCoordinationLists(facutly, (coordinationData) => {
      debug('FacultyController: ', coordinationData);
      res.send(coordinationData);
    });
  } catch (e) {
    debug('error: ', e);
  }
};

const getAllDepartamentList = (req, res) => {
  try {
    if (JSON.stringify(req.body) === '{}'){

    } else {
      if (req.body.schoolID !== undefined) {
        FacultyModel.getDepartamentBySchoolLists(req.body.schoolID, (departamentBySchoolData) => {
          debug('FacultyController: ', departamentBySchoolData);
          res.send(departamentBySchoolData);
        });
      } else {
        FacultyModel.getDepartamentByInstituteLists(req.body.instituteID, (departamentByInstituteData) => {
          debug('FacultyController: ', departamentByInstituteData);
          res.send(departamentByInstituteData);
        });
      }
    }
  } catch (e) {
    debug('error: ', e);
  }
};


const getAllChairList = (req, res) => {
  try {
    FacultyModel.getChairsLists(req.body.departamentID, (chairData) => {
      debug('FacultyController: ', chairData);
      res.send(chairData);
    });
  } catch (e) {
    debug('error: ', e);
  }
};

const getSchool = (req, res) => {
  try {
    FacultyModel.getSchool(facutly, req.body.schoolID, (schoolData) => {
      debug('UserController: ', schoolData);
      res.send(schoolData);
    });
  } catch (e) {
    debug('error: ', e);
  }
};

const getInstitute = (req, res) => {
  try {
    FacultyModel.getInstitute(facutly, req.body.instituteID, (instituteData) => {
      debug('UserController: ', instituteData);
      res.send(instituteData);
    });
  } catch (e) {
    debug('error: ', e);
  }
};

module.exports = {
  getAllFacultyList,
  getAllSchoolList,
  getAllInstituteList,
  getAllCoordinationList,
  getAllDepartamentList,
  getAllChairList,
  getInstitute,
  getSchool,
};
