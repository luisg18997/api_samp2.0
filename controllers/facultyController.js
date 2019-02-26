const appName = 'FacultyController';
const debug = require('debug')(appName);

const FacultyModel = require('../models/facultyModel.js');

const facutly = 1;

const getAllFacultyList = (req, res) => {
  const result = {};
  try {
    FacultyModel.getFacultyLists((err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllFacultyList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllFacultyList of FacultyController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllSchoolList = (req, res) => {
  const result = {};
  try {
    FacultyModel.getSchoolLists(facutly, (err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllSchoolList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllSchoolList of FacultyController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllInstituteList = (req, res) => {
  const result = {};
  try {
    FacultyModel.getInstituteLists(facutly, (err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllInstituteList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllInstituteList of FacultyController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllCoordinationList = (req, res) => {
  const result = {};
  try {
    FacultyModel.getCoordinationLists(facutly, (err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllCoordinationList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllCoordinationList of FacultyController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllDepartamentBySchoolList = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (req.body.param_school_id === undefined) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const schoolID = req.body.param_school_id;

      FacultyModel.getDepartamentBySchoolLists(schoolID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getAllDepartamentBySchoolList: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getAllDepartamentBySchoolList of FacultyController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllDepartamentByInstituteList = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (req.body.instituteID === undefined) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const instituteID = req.body.param_institute_id;

      FacultyModel.getDepartamentByInstituteLists(instituteID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getAllDepartamentByInstituteList: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getAllDepartamentByInstituteList of FacultyController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllChairList = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (req.body.param_departament_id === undefined) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const departamentID = req.body.param_departament_id;

      FacultyModel.getChairsLists(departamentID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getAllChairList: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getAllChairList of FacultyController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getSchool = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 1) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const schoolID = req.body.param_school_id;

      FacultyModel.getSchool(facutly, schoolID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getSchool: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getSchool of FacultyController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getCoordination = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 1) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const coordinationID = req.body.param_coordination_id;

      FacultyModel.getCoordination(facutly, coordinationID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getCoordination: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getAllFacultyList of FacultyController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getInstitute = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 1) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const instituteID = req.body.param_institute_id;

      FacultyModel.getInstitute(facutly, instituteID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getInstitute: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getInstitute of FacultyController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getDepartamentBySchool = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 2) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const schoolID = req.body.param_school_id;
      const departamentID = req.body.param_departament_id;

      FacultyModel.getDepartamentBySchool(schoolID, departamentID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getDepartamentBySchool: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getDepartamentBySchool of FacultyController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getDepartamentByInstitute = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 2) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const instituteID = req.body.param_institute_id;
      const departamentID = req.body.param_departament_id;

      FacultyModel.getDepartamentByInstitute(instituteID, departamentID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getDepartamentByInstitute: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getDepartamentByInstitute of FacultyController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getChair = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 2) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const departamentID = req.body.param_departament_id;
      const chairID = req.body.param_chair_id;

      FacultyModel.getChair(departamentID, chairID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getChair: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getChair of FacultyController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const addFaculty = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 3) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const facultyCode = req.body.param_faculty_code;
      const facultyName = req.body.param_faculty_name;
      const userID = req.body.param_user_id;

      FacultyModel.addFaculty(facultyCode, facultyName, userID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('addFaculty: ', data);
          res.send(data);
        }
      });
    }
  } catch(e) {
    debug('error catch in the funcion addFaculty of FacultyController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const updateFacultyAllColumns = (req, res) => {
  const result = {};
   try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 6) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const facultyID = req.body.param_faculty_id;
      const facultyCode = req.body.param_faculty_code;
      const facultyName = req.body.param_faculty_name;
      const userID = req.body.param_user_id;
      const facultyIsActive = req.body.param_faculty_is_active;
      const facultyIsDeleted = req.body.param_faculty_is_deleted;

      FacultyModel.updateFacultyAllColumns(facultyID, facultyCode, facultyName, userID,
        facultyIsActive, facultyIsDeleted, (err, data) => {
          if (err) {
            result.messageError = err;
            res.send(result);
          } else {
            debug('updateFacultyAllColumns: ', data);
            res.send(data);
          }
        });
    }
  } catch(e) {
    debug('error catch in the funcion updateFacultyAllColumns of FacultyController: ', e);
    result.messageError = e;
    res.send(result);
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
  getCoordination,
  getSchool,
  getDepartamentBySchool,
  getDepartamentByInstitute,
  getChair,
  addFaculty,
  updateFacultyAllColumns,
};
