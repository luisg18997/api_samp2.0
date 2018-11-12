const appName = 'ProcessModel';
const debug = require('debug')(appName);
const util = require('util');

const pool = require('./pgmodel.js');


const getProcessFormMovementPersonalList = (callback) => {
  const query = util.format('SELECT process_form.get_process_form_movement_personal_list() as result;');
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


const getProcessFormOficeList = (callback) => {
  const query = util.format('SELECT process_form.get_process_form_ofice_list() as result;');
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


const getStatusProcessFormList = (callback) => {
  const query = util.format('SELECT process_form.get_status_process_form_list() as result;');
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

  getProcessFormMovementPersonalList,
  getProcessFormOficeList,
  getStatusProcessFormList,

};
