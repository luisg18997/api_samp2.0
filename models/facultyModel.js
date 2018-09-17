const appName = 'Usermodel';
const debug = require('debug')(appName);
const util = require('util');

const pool = require('./pgmodel.js');


const getSchoolLists = (facultyID, callback) => {
  const query = util.format('SELECT faculty_data.get_all_schools_list(param_faculty_id := %d);', facultyID);
  return pool.query(query, (err, res) => {
    if (err) {
      debug(err.stack);
    } else {
      const schoolist = res.rows[0].get_all_schools_list;
      debug('usermodel: ', schoolist);
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
      debug('usermodel: ', institutelist);
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
      debug('usermodel: ', coordinationlist);
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
      debug('usermodel: ', departamentBySchoolList);
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
      debug('usermodel: ', departamentByinstituteList);
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
      debug('usermodel: ', departamentByinstituteList);
      callback(departamentByinstituteList);
    }
  });
};

const getSchool = (facultyID, schoolID, callback) => {
  const query = util.format('SELECT faculty_data.get_school(param_id := %d, param_faculty_id := %d);',schoolID ,facultyID);
  return pool.query(query, (err, res) => {
    if (err) {
      debug(err.stack);
    } else {
      const school = res.rows[0].get_school;
      debug('usermodel: ', school);
      callback(school);
    }
  });
};

const getInstitute = (facultyID, instituteID, callback) => {
  const query = util.format('SELECT faculty_data.get_institute(param_id := %d, param_faculty_id := %d);', instituteID, facultyID);
  return pool.query(query, (err, res) => {
    if (err) {
      debug(err.stack);
    } else {
      const institute = res.rows[0].get_institute;
      debug('usermodel: ', institute);
      callback(institute);
    }
  });
};

module.exports = {
  getSchoolLists,
  getInstituteLists,
	getCoordinationLists,
	getDepartamentBySchoolLists,
	getDepartamentByInstituteLists,
	getChairsLists,
  getInstitute,
  getSchool,
};
