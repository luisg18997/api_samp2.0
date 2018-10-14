const appName = 'FacultyController';
const debug = require('debug')(appName);

const FacultyModel = require('../models/facultyModel.js');

const facutly = 1;

const getAllFacultyList = (req, res) => {
  try {
    const result = {};
    FacultyModel.getFacultyLists((err, facultyData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
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
    const result = {};
    FacultyModel.getSchoolLists(facutly, (err, schoolData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
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
    const result = {};
    FacultyModel.getInstituteLists(facutly, (err, instituteData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('FacultyController: ', instituteData);
        res.send(instituteData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getAllCoordinationList = (req, res) => {
  try {
    const result = {};
    FacultyModel.getCoordinationLists(facutly, (err, coordinationData) => {
       if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('FacultyController: ', coordinationData);
        res.send(coordinationData);
      }
    });
  } catch (e) {
    debug('error: ', e);
  }
};

const getAllDepartamentList = (req, res) => {
  try {
    const result = {};
    if (JSON.stringify(req.body) === '{}'){
      debug('request bad params not received')
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const schoolID = req.body.schoolID;
      const instituteID = req.body.instituteID;
      if (req.body.schoolID !== undefined) {
        FacultyModel.getDepartamentBySchoolLists(schoolID, (err ,departamentBySchoolData) => {
           if (err) {
            result.messageError = err;
            res.status(404).send(result);
          } else {
            debug('FacultyController: ', departamentBySchoolData);
            res.send(departamentBySchoolData);
          }
        });
      } else {
        FacultyModel.getDepartamentByInstituteLists(instituteID, (departamentByInstituteData) => {
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
