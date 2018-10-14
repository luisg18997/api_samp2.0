const appName = 'FacultyModel';
const debug = require('debug')(appName);
const util = require('util');

const pool = require('./pgmodel.js');

const getFacultyLists = (callback) => {
  const query = util.format('SELECT faculty_data.get_all_facultys_list() as result;');
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result.length);
      if((res.rowCount !== 0) && (res.rows[0].result != null)){
        debug('result obtain rowCount: ',  res.rowCount)
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const getSchoolLists = (facultyID, callback) => {
  const query = util.format('SELECT faculty_data.get_all_schools_list(param_faculty_id := %d) as result;',
    facultyID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result.length);
      if((res.rowCount !== 0) && (res.rows[0].result != null)){
        debug('result obtain rowCount: ',  res.rowCount)
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const getInstituteLists = (facultyID, callback) => {
  const query = util.format('SELECT faculty_data.get_all_institutes_list(param_faculty_id := %d) as result;',
    facultyID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result.length);
      if((res.rowCount !== 0) && (res.rows[0].result != null)){
        debug('result obtain rowCount: ',  res.rowCount)
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const getCoordinationLists = (facultyID, callback) => {
  const query = util.format('SELECT faculty_data.get_all_coordinations_list(param_faculty_id := %d) as result;',
    facultyID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result.length);
      if((res.rowCount !== 0) && (res.rows[0].result != null)){
        debug('result obtain rowCount: ',  res.rowCount)
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const getDepartamentBySchoolLists = (schoolID, callback) => {
  const query = util.format('SELECT faculty_data.get_all_departaments_school_list(param_school_id := %d) as result ;',
    schoolID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result.length);
      if((res.rowCount !== 0) && (res.rows[0].result != null)){
        debug('result obtain rowCount: ',  res.rowCount)
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const getDepartamentByInstituteLists = (instituteID, callback) => {
  const query = util.format('SELECT faculty_data.get_all_departaments_institute_list(param_institute_id := %d) as result;',
    instituteID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result.length);
      if((res.rowCount !== 0) && (res.rows[0].result != null)){
        debug('result obtain rowCount: ',  res.rowCount)
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const getChairsLists = (departamentID, callback) => {
  const query = util.format('SELECT faculty_data.get_all_chairs_list(param_departament_id := %d) as result;',
    departamentID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result.length);
      if((res.rowCount !== 0) && (res.rows[0].result != null)){
        debug('result obtain rowCount: ',  res.rowCount)
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const getSchool = (facultyID, schoolID, callback) => {
  const query = util.format('SELECT faculty_data.get_school(param_id := %d, param_faculty_id := %d) as result;',
    schoolID, facultyID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result.length);
      if((res.rowCount !== 0) && (res.rows[0].result != null)){
        debug('result obtain rowCount: ',  res.rowCount)
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const getCoordination = (facultyID, coordinationID, callback) => {
  const query = util.format('SELECT faculty_data.get_coordination(param_id := %d, param_faculty_id := %d) as result;',
    coordinationID, facultyID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result.length);
      if((res.rowCount !== 0) && (res.rows[0].result != null)){
        debug('result obtain rowCount: ',  res.rowCount)
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const getInstitute = (facultyID, instituteID, callback) => {
  const query = util.format('SELECT faculty_data.get_institute(param_id := %d, param_faculty_id := %d) as result;',
    instituteID, facultyID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result.length);
      if((res.rowCount !== 0) && (res.rows[0].result != null)){
        debug('result obtain rowCount: ',  res.rowCount)
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};


const getDepartamentBySchool = (schoolID, departamentID, callback) => {
  const query = util.format('SELECT faculty_data.get_departament_school(param_id := %d, param_school_id := %d) as result;',
    departamentID, schoolID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result.length);
      if((res.rowCount !== 0) && (res.rows[0].result != null)){
        debug('result obtain rowCount: ',  res.rowCount)
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const getDepartamentByInstitute = (instituteID, departamentID, callback) => {
  const query = util.format('SELECT faculty_data.get_departament_institute(param_id := %d, param_institute_id := %d) as result;',
    departamentID, instituteID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result.length);
      if((res.rowCount !== 0) && (res.rows[0].result != null)){
        debug('result obtain rowCount: ',  res.rowCount)
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const getChair = (departamentID, chairID, callback) => {
  const query = util.format('SELECT faculty_data.get_chair(param_id := %d, param_departament_id := %d) as result;',
    chairID, departamentID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result.length);
      if((res.rowCount !== 0) && (res.rows[0].result != null)){
        debug('result obtain rowCount: ',  res.rowCount)
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const addFaculty = (facultyCode, facultyName, userID, callback) => {
  const query = util.format("SELECT faculty_data.faculty_insert(param_code := %d, param_name := '%s', param_user_id := %d) as result;",
    facultyCode, facultyName, userID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      data.result = res.rows[0].result;
      callback(false, data);
    } else {
      debug('err in the query: ', err);
      callback(err.stack, null);
    }
  });
}

const updateFacultyAllColumns = (facultyID, facultyCode, facultyName, userID, facultyIsActive, facultyIsDeleted, callback) => {
  const query = util.format("SELECT faculty_data.faculty_update_all_columns(param_id := %d, param_code := %d, param_name := '%s', param_user_id := %d, param_is_active := '%d', param_is_deleted := '%d') as result;",
    facultyID, facultyCode, facultyName, userID, facultyIsActive, facultyIsDeleted);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      data.result = res.rows[0].result;
      callback(false, data);
    } else {
      debug('err in the query: ', err);
      callback(err.stack, null);
    }
  });
}
module.exports = {
  getFacultyLists,
  getSchoolLists,
  getInstituteLists,
  getCoordinationLists,
  getDepartamentBySchoolLists,
  getDepartamentByInstituteLists,
  getChairsLists,
  getInstitute,
  getSchool,
  getCoordination,
  getDepartamentBySchool,
  getDepartamentByInstitute,
  getChair,
  addFaculty,
  updateFacultyAllColumns,
};
