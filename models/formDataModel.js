const appName = 'FormDataModel';
const debug = require('debug')(appName);
const util = require('util');
const moment = require('moment');

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
  const query = util.format("SELECT form_data.employee_form_ofice_insert_complete(param_employee_json := '%j', param_form_ofice_json := '%j', param_user_id := %d) as result;",
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

const getCreateCodeFormOFice = (schoolID, instituteID, coordinationID, callback) => {
  const query = util.format('SELECT form_data.get_form_ofice_code(param_school_id := %d, param_institute_id = %d, param_coordination_id := %d) as result;',
    schoolID, instituteID, coordinationID);
  return pool.query(query, (err, res) => {
    if (!err) {
      // debug('res.rows: ', res.rows[0].result.length);
      const data = moment().format('DM'); // catupra la fecha actual
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) { //valida si hay un codigo anterior
        debug(res.rows[0].result[0].code_form);
        const codeFormDB = res.rows[0].result[0].code_form;
        const confirmCode = codeFormDB.search(data);
        debug(data);
        debug(confirmCode);
        if (confirmCode !== -1) {
          debug('son iguales');
          const codeNew = codeFormDB.split('-');
          const numberCoder = codeNew[1];
          debug(numberCoder);
          const changesNumber = numberCoder.indexOf('0', 0);
          debug(changesNumber);
          let newNumber;
          if (changesNumber === 0) {
            const number = numberCoder.split('0');
            newNumber = parseInt(number[1], 0);
            newNumber += 1;
            debug(newNumber);
            const CodeOfice = `${data}-0${newNumber}`;
            callback(false, CodeOfice);
          } else {
            newNumber += 1;
            debug(newNumber);
            const CodeOfice = `${data}-${newNumber}`;
            callback(false, CodeOfice);
          }
        } else {
          debug('entro aqui son diferentes');
          const CodeOfice = `${data}-01`;
          debug(CodeOfice);
          callback(false, CodeOfice);
        }
      } else {
        const CodeOfice = `${data}-01`;
        debug(CodeOfice);
        callback(false, CodeOfice);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const getCreateCodeFormMovPer = (schoolID, instituteID, coordinationID, code, callback) => {
  const query = util.format('SELECT form_data.get_form_mov_personal_code(param_school_id := %d, param_institute_id = %d, param_coordination_id := %d) as result;',
    schoolID, instituteID, coordinationID);
  return pool.query(query, (err, res) => {
    if (!err) {
        data = `${code}-`;
        debug('data:, ', data );
        if((res.rowCount !== 0) && (res.rows[0].result != null)){
            const codeMovPerDB = res.rows[0].result[0].code_form;
            debug('codeMovPerDB: ', codeMovPerDB);
            const confirmcode = codeMovPerDB.split('-');
        } else {
          const codeMovPer = `${data}-0001`;
          debug('codeMovPer: ', codeMovPer);
          callback(false, codeMovPer);
        }
    } else {
      callback(err.stack, null);
    }
  });
}

module.exports = {
  getMovementTypeslist,
  addNewFormOfice,
  addNewFormMovPeronsal,
  getCreateCodeFormOFice,
  getCreateCodeFormMovPer,
};
