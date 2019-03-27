const appName = 'EmployeeModel';
const debug = require('debug')(appName);
const util = require('util');

const pool = require('./pgmodel.js');

const getStatesList = (callback) => {
  try {
    const query = util.format('SELECT employee_data.get_states_list() as result;');
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
  } catch(e) {
    debug('error catch in the funcion getStatesList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getMunicipalitiesList = (stateID, callback) => {
  try {
    const query = util.format('SELECT employee_data.get_municipalities_list(param_state_id := %d) as result;', stateID);
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
  } catch(e) {
    debug('error catch in the funcion getMunicipalitiesList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getNacionalitiesList = (callback) => {
  try {
    const query = util.format('SELECT employee_data.get_nacionalities_list() as result;');
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
  } catch(e) {
    debug('error catch in the funcion getNacionalitiesList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getParishList = (municipalityID, callback) => {
  try {
    const query = util.format('SELECT employee_data.get_parish_list(param_municipality_id := %d) as result;', municipalityID);
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
  } catch(e) {
    debug('error catch in the funcion getParishList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getCategoryType = (categorytypeID, callback) => {
  try {
    const query = util.format('SELECT employee_data.get_category_type(param_categorytypeID := %d);', categorytypeID);
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
  } catch(e) {
    debug('error catch in the funcion getCategoryType of EmployeeModel: ', e);
    return callback(e, null);
  }
};


const getdedicationtype = (dedicationtypeID, callback) => {
  try {
    const query = util.format('SELECT employee_data.get_dedication_type(param_dedicationtypeID := %d);', dedicationtypeID);
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
  } catch(e) {
    debug('error catch in the funcion getdedicationtype of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getDedicationTypesList = (callback) => {
  try {
    const query = util.format('SELECT employee_data.get_dedication_types_list() as result;');
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
  } catch(e) {
    debug('error catch in the funcion getDedicationTypesList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getExecuntingUnit = (ExecuntingUnitID, callback) => {
  try {
    const query = util.format('SELECT employee_data.get_execunting_unit(param_ExecuntingUnitID := %d);', ExecuntingUnitID);
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
  } catch(e) {
    debug('error catch in the funcion getExecuntingUnit of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getExecuntingUnitForFilterList = (codeFilter, callback) => {
  try {
    const query = util.format("SELECT employee_data.get_execunting_unit_filter_code(param_code := '%s') as result;",
      codeFilter);
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
  } catch(e) {
    debug('error catch in the funcion getExecuntingUnitForFilterList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getExecuntingUnitList = (callback) => {
  try {
    const query = util.format('SELECT employee_data.get_execunting_unit_list() as result;');
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
  } catch(e) {
    debug('error catch in the funcion getExecuntingUnitList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getCategoryTypesList = (callback) => {
  try {
    const query = util.format('SELECT employee_data.get_category_types_list() as result;');
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
  } catch(e) {
    debug('error catch in the funcion getCategoryTypesList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getIncomeTypeList = (callback) => {
  try {
    const query = util.format('SELECT employee_data.get_income_type_list() as result;');
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
  } catch(e) {
    debug('error catch in the funcion getIncomeTypeList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getIngressList = (callback) => {
  try {
    const query = util.format('SELECT employee_data.get_ingress_list() as result;');
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
  } catch(e) {
    debug('error catch in the funcion getIngressList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getDocumentationsList = (callback) => {
  try {
    const query = util.format('SELECT employee_data.get_documentations_list() as result;');
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
  } catch(e) {
    debug('error catch in the funcion getDocumentationsList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getEmployeeIdacCodeList = (callback) => {
  try {
    const query = util.format('SELECT employee_data.get_employee_idac_code_list() as result;');
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
  } catch(e) {
    debug('error catch in the funcion getEmployeeIdacCodeList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getEmployeeSalariesFilterSalaryList = (callback) => {
  try {
    const query = util.format('SELECT employee_data.get_employee_salaries_filter_salay_list() as result;');
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
  } catch(e) {
    debug('error catch in the funcion getEmployeeSalariesFilterSalaryList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getEmployeeSalariesSalaryList = (callback) => {
  try {
    const query = util.format('SELECT employee_data.get_employee_salaries_list() as result;');
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
  } catch(e) {
    debug('error catch in the funcion getEmployeeSalariesSalaryList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getGendersList = (callback) => {
  try {
    const query = util.format('SELECT employee_data.get_genders_list() as result;');
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
  } catch(e) {
    debug('error catch in the funcion getGendersList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getIdacCodesFilterVacantDateNotNullList = (execIds, callback) => {
  try {
    const query = util.format('SELECT employee_data.get_idac_codes_filter_vacant_date_not_null_exec_unit_list(param_execunting_unit_id := ARRAY[%s]) as result;',
      execIds);
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
  } catch(e) {
    debug('error catch in the funcion getIdacCodesFilterVacantDateNotNullList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getIdacCodesFilterVacantDateNullList = (callback) => {
  try {
    const query = util.format('SELECT employee_data.get_idac_codes_filter_vacant_date_null_list() as result;');
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
  } catch(e) {
    debug('error catch in the funcion getIdacCodesFilterVacantDateNullList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getIdacCodesList = (callback) => {
  try {
    const query = util.format('SELECT employee_data.get_idac_codes_list() as result;');
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
  } catch(e) {
    debug('error catch in the funcion getIdacCodesList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getSalaryForCategoryTypeList = (categoryId, callback) => {
  try {
    const query = util.format('SELECT employe_data.get_salary_for_category_type_list(param_category_id := %d) as result;',
      categoryId);
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
  } catch(e) {
    debug('error catch in the funcion getSalaryForCategoryTypeList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getSalaryDedicationCategoryType = (dedicationId, categoryId, callback) => {
  try {
    const query = util.format('SELECT employee_data.get_salary_for_dedication_type_category_type_list(param_dedication_id:= %d, param_category_id:= %d) as result;',
      dedicationId, categoryId);
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
  } catch(e) {
    debug('error catch in the funcion getSalaryDedicationCategoryType of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getSalaryForDedicationTypeList = (dedicationId, callback) => {
  try {
    const query = util.format('SELECT employee_data.get_salary_for_dedication_type_list(param_dedication_id := %d) as result;',
      dedicationId);
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
  } catch(e) {
    debug('error catch in the funcion getSalaryForDedicationTypeList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getSalaryList = (callback) => {
  try {
    const query = util.format('SELECT employee_data.get_salary_list() as result;');
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
  } catch(e) {
    debug('error catch in the funcion getSalaryList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getAllEmployeesList = (schoolID, instituteID, coordinationID, callback) => {
  try {
    const query = util.format('SELECT employee_data.get_employees_list(param_school_id := %d, param_institute_id := %d, param_coordination_id := %d) as result;',
      schoolID, instituteID, coordinationID);
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
  } catch(e) {
    debug('error catch in the funcion getAllEmployeesList of EmployeeModel: ', e);
    return callback(e, null);
  }
};

const getEmployee = (employeeID, callback) => {
  try {
    const query = util.format('SELECT employee_data.get_employee(param_id := %d) as result;',
      employeeID);
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
  } catch(e) {
    debug('error catch in the funcion getEmployee of EmployeeModel: ', e);
    return callback(e, null);
  }
};


module.exports = {
  getStatesList,
  getMunicipalitiesList,
  getNacionalitiesList,
  getParishList,
  getCategoryTypesList,
  getCategoryType,
  getdedicationtype,
  getDedicationTypesList,
  getExecuntingUnit,
  getExecuntingUnitList,
  getIncomeTypeList,
  getIngressList,
  getDocumentationsList,
  getEmployeeIdacCodeList,
  getEmployeeSalariesFilterSalaryList,
  getEmployeeSalariesSalaryList,
  getGendersList,
  getIdacCodesFilterVacantDateNotNullList,
  getIdacCodesFilterVacantDateNullList,
  getIdacCodesList,
  getSalaryForCategoryTypeList,
  getSalaryDedicationCategoryType,
  getSalaryForDedicationTypeList,
  getSalaryList,
  getExecuntingUnitForFilterList,
  getAllEmployeesList,
  getEmployee,
};
