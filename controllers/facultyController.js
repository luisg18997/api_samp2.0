const appName = 'UserController';
const debug = require('debug')(appName);

const UserModel = require('../models/facultyModel.js');

const facutly = 1;

const getAllSchoolList = (req, res) => {
  try {
    UserModel.getSchoolLists(facutly, (schoolData) => {
      debug('UserController: ', schoolData);
      res.send(schoolData);
    });
  } catch (e) {
    debug('error: ', e);
  }
};

const getAllInstituteList = (req, res) => {
  try {
    UserModel.getInstituteLists(facutly, (instituteData) => {
      debug('UserController: ', instituteData);
      res.send(instituteData);
    });
  } catch (e) {
    debug('error: ', e);
  }
};

const getAllCoordinationList = (req, res) => {
  try {
    UserModel.getCoordinationLists(facutly, (coordinationData) => {
      debug('UserController: ', coordinationData);
      res.send(coordinationData);
    });
  } catch (e) {
    debug('error: ', e);
  }
};

module.exports = {
  getAllSchoolList,
  getAllInstituteList,
  getAllCoordinationList,
};
