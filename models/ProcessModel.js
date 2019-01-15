const appName = 'ProcessModel';
const debug = require('debug')(appName);
const util = require('util');

const pool = require('./pgmodel.js');


const getProcessFormMovementPersonalList = (callback) => {
  const query = util.format('SELECT process_form.get_process_form_movement_personal_list() as result;');
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
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


const getProcessFormOficeList = (callback) => {
  const query = util.format('SELECT process_form.get_process_form_ofice_list() as result;');
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
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


const getStatusProcessFormList = (callback) => {
  const query = util.format('SELECT process_form.get_status_process_form_list() as result;');
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
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

const updateAllColumnsProcessMovPersonalForm = (processID, userID, movPersonalFormID, ubicationID,
  observation, statusProcessFormID, isActive, isDeleted, callback) => {
  const query = util.format("SELECT process_form.process_movement_personal_form_update_all_columns(param_id:= %d, param_user_id := %d, param_movement_personal_form_id := %d, param_ubication_id := %d, param_observation :='%s', param_status_process_form_id := %d, param_is_active := '%d', param_is_deleted := '%d') as result;",
    processID, userID, movPersonalFormID, ubicationID, observation, statusProcessFormID, isActive,
    isDeleted);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
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

const updateAllColumnsProcessOfficialForm = (processID, userID, officialFormID, ubicationID,
  observation, statusProcessFormID, isActive, isDeleted, callback) => {
  const query = util.format("SELECT process_form.process_official_form_update_all_columns(param_id:= %d, param_user_id := %d, param_official_form_id := %d, param_ubication_id := %d, param_observation :='%s', param_status_process_form_id := %d, param_is_active := '%d', param_is_deleted := '%d') as result;",
    processID, userID, officialFormID, ubicationID, observation, statusProcessFormID, isActive,
    isDeleted);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
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

  getProcessFormMovementPersonalList,
  getProcessFormOficeList,
  getStatusProcessFormList,
  updateAllColumnsProcessMovPersonalForm,
  updateAllColumnsProcessOfficialForm,
};
