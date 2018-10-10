const appName = 'EmployeeModel';
const debug = require('debug')(appName);
const util = require('util');

const pool = require('./pgmodel.js');

const getStatesList = (callback) => {
	const query = util.format('SELECT employee_data.get_states_list();');
	return pool.query(query, (err, res) => {
    if (err) {
      debug(err.stack);
    } else {
      const statelist = res.rows[0].get_states_list;
      debug('EmployeeModel: ', statelist);
      callback(statelist);
    }
  });
}

const getMunicipalitiesList = (stateID, callback) => {
	const query = util.format('SELECT employee_data.get_municipalities_list(param_state_id := %d);', stateID);
	return pool.query(query, (err, res) => {
    if (err) {
      debug(err.stack);
    } else {
      const municipalitylist = res.rows[0].get_municipalities_list;
      debug('EmployeeModel: ', municipalitylist);
      callback(municipalitylist);
    }
  });
}

const getParishList = (municipalityID, callback) => {
	const query = util.format('SELECT employee_data.get_parish_list(param_municipality_id := %d);', municipalityID);
	return pool.query(query, (err, res) => {
    if (err) {
      debug(err.stack);
    } else {
      const parishlist = res.rows[0].get_parish_list;
      debug('EmployeeModel: ', parishlist);
      callback(parishlist);
    }
  });
}

module.exports = {
	getStatesList,
	getMunicipalitiesList,
	getParishList,
}