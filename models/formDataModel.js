const appName = 'FormDataModel';
const debug = require('debug')(appName);
const util = require('util');

const pool = require('./pgmodel.js');

const getMovementTypeslist = (callback) => {
  const query = util.format('SELECT form_data.get_movement_types_list() as result;');
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ', res.rows[0].result.length);
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('result obtain rowCount: ', res.rowCount);
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

const addNewFormOfice = (employee, formOfice, userID, callback) => {
  const query = util.format("SELECT form_data.employee_form_ofice_insert_complete(param_employee_json := '%j', param_form_ofice_json := 'j', param_user_id := %d) as result;",
    employee, formOfice, userID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ', res.rows[0].result.length);
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('result obtain rowCount: ', res.rowCount);
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

const addNewFormMovPeronsal = (employee, formMovPeronsal, userID, callback) => {
  const query = util.format("SELECT form_data.employee_form_movement_personal_insert_complete(param_employee_json := '%j', param_form_mov_per_json := 'j', param_user_id := %d) as result;",
    employee, formMovPeronsal, userID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      debug('res.rows: ', res.rows[0].result.length);
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('result obtain rowCount: ', res.rowCount);
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
  getMovementTypeslist,
  addNewFormOfice,
  addNewFormMovPeronsal,
};
