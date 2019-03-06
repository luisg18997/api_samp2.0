const appName = 'FormModel';
const debug = require('debug')(appName);
const util = require('util');
const moment = require('moment');

const pool = require('./pgmodel.js');

const getMovementTypeslist = (callback) => {
  try {
    const query = util.format('SELECT form_data.get_movement_types_list() as result;');
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
  } catch (e) {
    debug('error catch in the funcion getMovementTypeslist of FormModel: ', e);
    return callback(e, null);
  }
};

const getAccountantTypeslist = (callback) => {
  try {
    const query = util.format('SELECT form_data.get_accountant_types_list() as result;');
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
  } catch (e) {
    debug('error catch in the funcion getAccountantTypeslist of FormModel: ', e);
    return callback(e, null);
  }
};

const getProgramTypeslist = (callback) => {
  try {
    const query = util.format('SELECT form_data.get_program_types_list() as result;');
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
  } catch (e) {
    debug('error catch in the funcion getProgramTypeslist of FormModel: ', e);
    return callback(e, null);
  }
};

const addNewFormOfice = (employee, OfficialForm, userID, callback) => {
  try {
    const query = util.format("SELECT form_data.employee_official_form_insert_complete(param_employee_json := '%j', param_official_form_json := '%j', param_user_id := %d) as result;",
      employee, OfficialForm, userID);
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
  } catch (e) {
    debug('error catch in the funcion addNewFormOfice of FormModel: ', e);
    return callback(e, null);
  }
};

const addNewFormMovPeronsal = (employee, formMovPeronsal, userID, callback) => {
  try {
    const query = util.format("SELECT form_data.employee_movement_personal_form_insert_complete(param_employee_json := '%j', param_form_mov_per_json := '%j', param_user_id := %d) as result;",
      employee, formMovPeronsal, userID);
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
  } catch (e) {
    debug('error catch in the funcion addNewFormMovPeronsal of FormModel: ', e);
    return callback(e, null);
  }
};

const getCreateCodeFormOFice = (schoolID, instituteID, coordinationID, callback) => {
  try {
    const query = util.format('SELECT form_data.get_official_form_code(param_school_id := %d, param_institute_id := %d, param_coordination_id := %d) as result;',
      schoolID, instituteID, coordinationID);
    return pool.query(query, (err, res) => {
      if (!err) {
        const data = moment().format('DDMMYY'); // catupra la fecha actual
        const code = {};
        if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
          debug('res.rows: ', res.rows[0].result.length);
          // valida si hay un codigo anterior
          debug(res.rows[0].result.code_form);
          const codeFormDB = res.rows[0].result.code_form;
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
              code.ofice = `${data}-0${newNumber}`;
            } else {
              newNumber += 1;
              debug(newNumber);
              code.ofice = `${data}-${newNumber}`;
            }
          } else {
            debug('entro aqui son diferentes');
            code.ofice = `${data}-01`;
            debug(code.ofice);
          }
        } else {
          code.ofice = `${data}-01`;
          debug(code.ofice);
        }
        callback(false, code);
      } else {
        callback(err.stack, null);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getCreateCodeFormOFice of FormModel: ', e);
    return callback(e, null);
  }
};

const getCreateCodeFormMovPer = (schoolID, instituteID, coordinationID, code, callback) => {
  try {
    const query = util.format('SELECT form_data.get_form_mov_personal_code(param_school_id := %d, param_institute_id := %d, param_coordination_id := %d) as result;',
      schoolID, instituteID, coordinationID);
    return pool.query(query, (err, res) => {
      if (!err) {
        const data = `${code}-`;
        const Code = {};
        debug('data:, ', data);
        if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
          debug('res.rows: ', res.rows[0].result.length);
          const codeMovPerDB = res.rows[0].result.code_form;
          // const codeMovPerDB = '0710-0008';
          debug('codeMovPerDB: ', codeMovPerDB);
          const confirmcode = codeMovPerDB.split('-');
          const number = {
            case1: confirmcode[1].slice(0, 1),
            code1: confirmcode[1].slice(0, 4),
            case2: confirmcode[1].slice(1, 2),
            code2: confirmcode[1].substr(1, 4),
            case3: confirmcode[1].slice(2, 3),
            code3: confirmcode[1].substr(2, 4),
            case4: confirmcode[1].slice(3, 4),
            code4: confirmcode[1].substr(3, 4),
          };
          debug('number: ', number);
          let newNumber;
          if ((number.case1 !== 0) && number.code1 >= 999) {
            debug('es mayor que 999');
            newNumber = parseInt(number.code1, 0);
            newNumber += 1;
            debug('newNumber:', newNumber);
            Code.movPer = `${data}${newNumber}`;
          } else if ((number.case2 !== 0) && (number.code2 >= 99 && number.code2 < 999)) {
            debug('es mayor que 99 y menor que 999');
            newNumber = parseInt(number.code2, 0);
            newNumber += 1;
            debug('newNumber:', newNumber);
            Code.movPer = `${data}0${newNumber}`;
          } else if ((number.case3 !== 0) && (number.code3 >= 9 && number.code3 < 99)) {
            debug('es mayor que 9 y menor que 99');
            newNumber = parseInt(number.code3, 0);
            newNumber += 1;
            debug('newNumber:', newNumber);
            Code.movPer = `${data}00${newNumber}`;
          } else {
            debug('es mayor que 1 y menor que 9');
            newNumber = parseInt(number.code4, 0);
            newNumber += 1;
            debug('newNumber:', newNumber);
            Code.movPer = `${data}000${newNumber}`;
          }
        } else {
          debug('no hay nada en la db');
          Code.movPer = `${data}0001`;
          debug('codeMovPer: ', Code);
        }
        callback(false, Code);
      } else {
        callback(err.stack, null);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getCreateCodeFormMovPer of FormModel: ', e);
    return callback(e, null);
  }
};

const getFormMovPersonal = (identification, ubication, callback) => {
  try {
    const query = util.format("SELECT form_data.get_movement_personal_form(param_identification :='%s', param_ubication_id := %d) as result;",
      identification, ubication);
    const data = {};
    return pool.query(query, (err, res) => {
      if (!err) {
        if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
          debug('res.rows: ', res.rows[0].result.length);
          res.rows[0].result.registration_date = moment(res.rows[0].result.registration_date).format('D-M-Y');
          res.rows[0].result.start_date = moment(res.rows[0].result.start_date).format('DD-MM-Y');
          res.rows[0].result.finish_date = moment(res.rows[0].result.finish_date).format('DD-MM-Y');
          if (res.rows[0].result.admission_date !== '') {
            res.rows[0].result.admission_date = moment(res.rows[0].result.admission_date).format('DD-MM-Y');
          }
          callback(false, res.rows[0].result);
        } else {
          data.result = 'not found';
          callback(false, data);
        }
      } else {
        callback(err.stack, null);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getFormMovPersonal of FormModel: ', e);
    return callback(e, null);
  }
};

const getAllFormsOfice = (schoolID, instituteID, coordinationID, callback) => {
  try {
    const query = util.format('SELECT form_data.get_form_official_list(param_school_id := %d, param_institute_id := %d, param_coordination_id := %d) as result;',
      schoolID, instituteID, coordinationID);
    const data = {};
    return pool.query(query, (err, res) => {
      if (!err) {
        if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
          debug('res.rows: ', res.rows[0].result.length);
          const OfficialForm = res.rows[0].result;
          for (let i = 0; i < OfficialForm.length; i += 1) {
            OfficialForm[i].registration_date = moment(OfficialForm[i].registration_date).format('DD-MM-Y');
          }
          callback(false, OfficialForm);
        } else {
          data.result = 'not found';
          callback(false, data);
        }
      } else {
        callback(err.stack, null);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllFormsOfice of FormModel: ', e);
    return callback(e, null);
  }
};

const getAllForms = (ubicationID, ubicationFormID, callback) => {
  try {
    const query = util.format('SELECT form_data.get_forms_list(param_ubication_id := %d, param_ubication_form_id := %d) as result;',
      ubicationID, ubicationFormID);
    const data = {};
    return pool.query(query, (err, res) => {
      if (!err) {
        if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
          const forms = res.rows[0].result;
          debug('res.rows: ', forms.length);
          for (let i = 0; i < forms.length; i += 1) {
            forms[i].registration_date = moment(forms[i].registration_date).format('DD-MM-Y');
            if (forms[i].form_ofice_id !== null && forms[i].mov_personal_form_id === undefined) {
              forms[i].form_type = 'OFICIO';
            } else {
              forms[i].form_type = 'MOVIMIENTO PERSONAL';
            }
          }
          callback(false, forms);
        } else {
          data.result = 'not found';
          callback(false, data);
        }
      } else {
        callback(err.stack, null);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllForms of FormModel: ', e);
    return callback(e, null);
  }
};

const getFormOfficial = (identification, ubication, callback) => {
  try {
    const query = util.format("SELECT  form_data.get_form_official(param_identification := '%s', param_ubication_id := %d) as result;",
      identification, ubication);
    const data = {};
    return pool.query(query, (err, res) => {
      if (!err) {
        if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
          debug('res.rows: ', res.rows[0].result.length);
          res.rows[0].result.registration_date = moment(res.rows[0].result.registration_date).format('D-M-Y');
          res.rows[0].result.start_date = moment(res.rows[0].result.start_date).format('DD-MM-Y');
          res.rows[0].result.finish_date = moment(res.rows[0].result.finish_date).format('DD-MM-Y');
          callback(false, res.rows[0].result);
        } else {
          data.result = 'not found';
          callback(false, data);
        }
      } else {
        callback(err.stack, null);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getFormOfficial of FormModel: ', e);
    return callback(e, null);
  }
};

const updateOfficialApproval = (officialID, officialProcessID, ubicationID, statusProcessFormID,
  observation, isActive, isDeleted, userID, callback) => {
  try {
    const query = util.format("SELECT form_data.official_form_update_approval(param_id := %d, param_official_form_process_id :=%d, param_ubication_id := %d, param_status_process_form_id := %d, param_observation := '%s', param_is_active := '%d', param_is_deleted := '%d', param_user_id := %d) as result;",
      officialID, officialProcessID, ubicationID, statusProcessFormID,
      observation, isActive, isDeleted, userID);
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
  } catch (e) {
    debug('error catch in the funcion updateOfficialApproval of FormModel: ', e);
    return callback(e, null);
  }
};

const updateMovPersonalApproval = (movPersonalID, movPersonalProcessID, employeeID, movementTypeID,
  ubicationID, statusProcessFormID, accountatTypeID, programID, observation, isActive, isDeleted,
  userID, callback) => {
  try {
    const query = util.format("SELECT form_data.mov_personal_form_update_approval(param_id := %d, param_mov_personal_form_process_id := %d, param_employee_id := %d, param_movement_type_id := %d, param_ubication_id := %d, param_status_process_form_id := %d, param_accountant_type_id := %d, param_progam_type_id := %d, param_observation := '%s', param_is_active := '%d', param_is_deleted := '%d', param_user_id := %d) as result;",
      movPersonalID, movPersonalProcessID, employeeID, movementTypeID, ubicationID,
      statusProcessFormID, accountatTypeID, programID, observation, isActive,
      isDeleted, userID);
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
  } catch (e) {
    debug('error catch in the funcion updateMovPersonalApproval of FormModel: ', e);
    return callback(e, null);
  }
};

const getAllOfficialFormApproval = (ubicationID, schoolID,
  instituteID, coordinationID, callback) => {
  try {
    const query = util.format('SELECT form_data.get_form_official_list_approval(param_ubication_id := %d, param_school_id := %d, param_institute_id := %d, param_coordination_id := %d) as result;',
      ubicationID, schoolID, instituteID, coordinationID);
    const data = {};
    return pool.query(query, (err, res) => {
      if (!err) {
        if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
          debug('res.rows: ', res.rows[0].result.length);
          const OfficialForm = res.rows[0].result;
          for (let i = 0; i < OfficialForm.length; i += 1) {
            OfficialForm[i].approval_date = moment(OfficialForm[i].approval_date).format('DD-MM-Y');
          }
          callback(false, OfficialForm);
        } else {
          data.result = 'not found';
          callback(false, data);
        }
      } else {
        callback(err.stack, null);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllOfficialFromApproval of FormModel: ', e);
    return callback(e, null);
  }
};

const getAllOfficialFormRejected = (ubicationID, schoolID,
  instituteID, coordinationID, callback) => {
  try {
    const query = util.format('SELECT form_data.get_form_official_list_approval(param_ubication_id := %d, param_school_id := %d, param_institute_id := %d, param_coordination_id := %d) as result;',
      ubicationID, schoolID, instituteID, coordinationID);
    const data = {};
    return pool.query(query, (err, res) => {
      if (!err) {
        if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
          debug('res.rows: ', res.rows[0].result.length);
          const OfficialForm = res.rows[0].result;
          for (let i = 0; i < OfficialForm.length; i += 1) {
            OfficialForm[i].date_made = moment(OfficialForm[i].date_made).format('DD-MM-Y');
          }
          callback(false, OfficialForm);
        } else {
          data.result = 'not found';
          callback(false, data);
        }
      } else {
        callback(err.stack, null);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllOfficialFromApproval of FormModel: ', e);
    return callback(e, null);
  }
};

module.exports = {
  getMovementTypeslist,
  addNewFormOfice,
  addNewFormMovPeronsal,
  getCreateCodeFormOFice,
  getCreateCodeFormMovPer,
  getFormMovPersonal,
  getAllFormsOfice,
  getAllForms,
  getFormOfficial,
  updateOfficialApproval,
  getAccountantTypeslist,
  getProgramTypeslist,
  updateMovPersonalApproval,
  getAllOfficialFormApproval,
  getAllOfficialFormRejected,
};
