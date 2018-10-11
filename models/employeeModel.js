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
};

module.exports = {
  getStatesList,
};
