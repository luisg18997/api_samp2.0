const appName = 'FacultyModel';
const debug = require('debug')(appName);
const util = require('util');

const pool = require('./pgmodel.js');

const getFacultyLists = (callback) => {
  const query = util.format('SELECT faculty_data.get_all_facultys_list() as result;');
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result);
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
  const query = util.format('SELECT faculty_data.get_all_schools_list(param_faculty_id := %d) as result;', facultyID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result);
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
  const query = util.format('SELECT faculty_data.get_all_institutes_list(param_faculty_id := %d) as result;', facultyID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result);
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
  const query = util.format('SELECT faculty_data.get_all_coordinations_list(param_faculty_id := %d) as result;', facultyID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result);
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
  const query = util.format('SELECT faculty_data.get_all_departaments_school_list(param_school_id := %d) as result ;', schoolID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result);
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
  const query = util.format('SELECT faculty_data.get_all_departaments_institute_list(param_institute_id := %d) as result;', instituteID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result);
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
  const query = util.format('SELECT faculty_data.get_all_chairs_list(param_departament_id := %d) as result;', departamentID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result);
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
  const query = util.format('SELECT faculty_data.get_school(param_id := %d, param_faculty_id := %d) as result;', schoolID, facultyID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result);
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
  const query = util.format('SELECT faculty_data.get_institute(param_id := %d, param_faculty_id := %d) as result;', instituteID, facultyID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ',  res.rows[0].result);
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
};
