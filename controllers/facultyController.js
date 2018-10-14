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
    debug('req.body.length: ', Object.keys(req.body).length);
    if (req.body.schoolID === undefined){
      debug('request bad params not received')
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const schoolID = req.body.schoolID;

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
    debug('req.body.length: ', Object.keys(req.body).length);
    if (req.body.instituteID === undefined){
      debug('request bad params not received')
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const instituteID = req.body.instituteID;

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
    debug('req.body.length: ', Object.keys(req.body).length);
    if (req.body.departamentID === undefined){
      debug('request bad params not received')
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const departamentID =  req.body.departamentID;

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
    debug('req.body.length: ', Object.keys(req.body).length);
    if (rObject.keys(req.body).length !== 1){
      debug('request bad params not received')
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const schoolID = req.body.schoolID;

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
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 1){
      debug('request bad params not received')
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const instituteID = req.body.instituteID;

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

const getDepartamentBySchool = (req, res) => {
  try {
    const result = {};
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 2) {
      debug('request bad params not received')
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const schoolID = req.body.schoolID;
      const departamentID = req.body.departamentID;

      FacultyModel.getDepartamentBySchool(schoolID, departamentID, (err, deptSchoolData) => {
        if (err){
          result.messageError = err;
          res.status(404).send(result);
        } else {
          debug('FacultyController: ', deptSchoolData);
          res.send(deptSchoolData);
        }
      });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getDepartamentByInstitute = (req, res) => {
  try {
    const result = {};
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 2) {
      debug('request bad params not received')
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const instituteID = req.body.instituteID;
      const departamentID = req.body.departamentID;

      FacultyModel.getDepartamentByInstitute(instituteID, departamentID, (err, depInstData) => {
        if (err){
          result.messageError = err;
          res.status(404).send(result);
        } else {
          debug('FacultyController: ', depInstData);
          res.send(depInstData);
        }
      });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getChair = (req, res) => {
  try {
    const result = {};
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 2 ) {
      debug('request bad params not received')
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const departamentID = req.body.departamentID;
      const chairID = req.body.chairID;

      FacultyModel.getChair(departamentID, chairID, (err, chairData) => {
        if (err){
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

const addFaculty = (req, res) => {
  const result = {};
  debug('req.body.length: ', Object.keys(req.body).length);
  if (Object.keys(req.body).length !== 3) {
    debug('request bad params not received')
    result.parambad = 'request bad';
    res.status(400).send(result);
  } else {
    const facultyCode = req.body.facultyCode;
    const facultyName = req.body.facultyName;
    const userID = req.body.userID;

    FacultyModel.addFaculty(facultyCode, facultyName, userID, (err, facutlyInsert) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('FacultyController: ', facutlyInsert);
        res.send(facutlyInsert);
      }
    });
  }
};

const updateFacultyAllColumns = (req, res) => {
  const result = {};
  debug('req.body.length: ', Object.keys(req.body).length);
  if (Object.keys(req.body).length !== 6) {
    debug('request bad params not received')
    result.parambad = 'request bad';
    res.status(400).send(result);
  } else {
    const facultyID = req.body.facultyID;
    const facultyCode = req.body.facultyCode;
    const facultyName = req.body.facultyName;
    const userID = req.body.userID;
    const facultyIsActive = req.body.facultyIsActive;
    const facultyIsDeleted = req.body.facultyIsDeleted;

    FacultyModel.updateFacultyAllColumns(facultyID, facultyCode, facultyName, userID, facultyIsActive, facultyIsDeleted, (err, facultyUpdate) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('FacultyController: ', facultyUpdate);
        res.send(facultyUpdate);
      }
    })
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
  getDepartamentBySchool,
  getDepartamentByInstitute,
  getChair,
  addFaculty,
  updateFacultyAllColumns,
};
