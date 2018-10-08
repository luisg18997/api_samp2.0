const appName = 'FacultyModel';
const debug = require('debug')(appName);
const util = require('util');

const pool = require('./pgmodel.js');

const getFacultyLists = (callback) => {
  const query = util.format('SELECT faculty_data.get_all_facultys_list();');
  return pool.query(query, (err, res) => {
    if (err) {
      debug(err.stack);
    } else {
      const facultylist = res.rows[0].get_all_facultys_list;
      debug('FacultyModel: ', facultylist);
      callback(facultylist);
    }
  });
}

const getSchoolLists = (facultyID, callback) => {
  const query = util.format('SELECT faculty_data.get_all_schools_list(param_faculty_id := %d);', facultyID);
  return pool.query(query, (err, res) => {
    if (err) {
      debug(err.stack);
    } else {
      const schoolist = res.rows[0].get_all_schools_list;
      debug('FacultyModel: ', schoolist);
      callback(schoolist);
    }
  });
};

const getInstituteLists = (facultyID, callback) => {
  const query = util.format('SELECT faculty_data.get_all_institutes_list(param_faculty_id := %d);', facultyID);
  return pool.query(query, (err, res) => {
    if (err) {
      debug(err.stack);
    } else {
      const institutelist = res.rows[0].get_all_institutes_list;
      debug('FacultyModel: ', institutelist);
      callback(institutelist);
    }
  });
};

const getCoordinationLists = (facultyID, callback) => {
  const query = util.format('SELECT faculty_data.get_all_coordinations_list(param_faculty_id := %d);', facultyID);
  return pool.query(query, (err, res) => {
    if (err) {
      debug(err.stack);
    } else {
      const coordinationlist = res.rows[0].get_all_coordinations_list;
      debug('FacultyModel: ', coordinationlist);
      callback(coordinationlist);
    }
  });
};

const getDepartamentBySchoolLists = (schoolID, callback) => {
  const query = util.format('SELECT faculty_data.get_all_departaments_school_list(param_school_id := %d);', schoolID);
  return pool.query(query, (err, res) => {
    if (err) {
      debug(err.stack);
    } else {
      const departamentBySchoolList = res.rows[0].get_all_departaments_school_list;
      debug('FacultyModel: ', departamentBySchoolList);
      callback(departamentBySchoolList);
    }
  });
};

const getDepartamentByInstituteLists = (instituteID, callback) => {
  const query = util.format('SELECT faculty_data.get_all_departaments_institute_list(param_institute_id := %d);', instituteID);
  return pool.query(query, (err, res) => {
    if (err) {
      debug(err.stack);
    } else {
      const departamentByinstituteList = res.rows[0].get_all_departaments_institute_list;
      debug('FacultyModel: ', departamentByinstituteList);
      callback(departamentByinstituteList);
    }
  });
};

const getChairsLists = (departamentID, callback) => {
  const query = util.format('SELECT faculty_data.get_all_chairs_list(param_departament_id := %d);', departamentID);
  return pool.query(query, (err, res) => {
    if (err) {
      debug(err.stack);
    } else {
      const departamentByinstituteList = res.rows[0].get_all_chairs_list;
      debug('FacultyModel: ', departamentByinstituteList);
      callback(departamentByinstituteList);
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
};
