const appName = 'Usermodel';
const debug = require('debug')(appName);
const util = require('util');

const pool = require('./pgmodel.js');


const getSchoolLists = (faculty, callback) => {
  const query = util.format('SELECT faculty_data.get_all_schools_list(param_faculty_id := %d);', faculty);
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

const getInstituteLists = (faculty, callback) => {
  const query = util.format('SELECT faculty_data.get_all_institutes_list(param_faculty_id := %d);', faculty);
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

const getCoordinationLists = (faculty, callback) => {
  const query = util.format('SELECT faculty_data.get_all_coordinations_list(param_faculty_id := %d);', faculty);
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

module.exports = {
  getSchoolLists,
  getInstituteLists,
	getCoordinationLists,
};
