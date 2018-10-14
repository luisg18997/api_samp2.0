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
    res.status(500).send(e);
  }
};

const getAllDepartamentBySchoolList = (req, res) => {
  try {
    const result = {};
    if (req.body.schoolID === undefined){
      debug('request bad params not received')
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const schoolID = req.body.schoolID;
      debug('schoolID: ', schoolID);
      FacultyModel.getDepartamentBySchoolLists(schoolID, (err ,departamentBySchoolData) => {
         if (err) {
          result.messageError = err;
          res.status(404).send(result);
        } else {
          debug('FacultyController: ', departamentBySchoolData);
          res.send(departamentBySchoolData);
        }
      });
    }
  } catch (e) {
   debug('error: ', e);
    res.status(500).send(e);
  }
};

const getAllDepartamentByInstituteList = (req, res) => {
  try {
    const result = {};
    if (req.body.instituteID === undefined){
      debug('request bad params not received')
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const instituteID = req.body.instituteID;
      debug('instituteID: ', instituteID);
      FacultyModel.getDepartamentByInstituteLists(instituteID, (err, departamentByInstituteData) => {
         if (err) {
          result.messageError = err;
          res.status(404).send(result);
        } else {
          debug('FacultyController: ', departamentByInstituteData);
          res.send(departamentByInstituteData);
        }
      });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getAllChairList = (req, res) => {
  try {
    const result = {};
    if (req.body.departamentID === undefined){
      debug('request bad params not received')
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const departamentID =  req.body.departamentID;
      debug('departamentID: ', departamentID)
      FacultyModel.getChairsLists(departamentID, (err, chairData) => {
        if( err) {
          result.messageError = err;
          res.status(404).send(result);
        } else {
          debug('FacultyController: ', chairData);
          res.send(chairData);
        }
      });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getSchool = (req, res) => {
  try {
    const result = {};
    if (req.body.schoolID === undefined){
      debug('request bad params not received')
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const schoolID = req.body.schoolID;
      debug('schoolID: ', schoolID);
      FacultyModel.getSchool(facutly, schoolID, (err, schoolData) => {
        if (err) {
          result.messageError = err;
          res.status(404).send(result);
        } else{
          debug('FacultyController: ', schoolData);
          res.send(schoolData);
        }
      });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getInstitute = (req, res) => {
  try {
    const result = {};
    if (req.body.instituteID === undefined){
      debug('request bad params not received')
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const instituteID = req.body.instituteID;
      debug('instituteID: ', instituteID);
      FacultyModel.getInstitute(facutly, instituteID, (err ,instituteData) => {
        if(err){
          result.messageError = err;
          res.status(404).send(result);
        } else {
          debug('FacultyController: ', instituteData);
          res.send(instituteData);
        }
      });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

module.exports = {
  getAllFacultyList,
  getAllSchoolList,
  getAllInstituteList,
  getAllCoordinationList,
  getAllDepartamentByInstituteList,
  getAllDepartamentBySchoolList,
  getAllChairList,
  getInstitute,
  getSchool,
};
