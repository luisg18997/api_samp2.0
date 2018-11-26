const appName = 'EmployeeModel';
const debug = require('debug')(appName);
const util = require('util');

const pool = require('./pgmodel.js');

const getStatesList = (callback) => {
  const query = util.format('SELECT employee_data.get_states_list() as result;');
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

const getMunicipalitiesList = (stateID, callback) => {
  const query = util.format('SELECT employee_data.get_municipalities_list(param_state_id := %d) as result;', stateID);
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

const getNacionalitiesList = (callback) => {
  const query = util.format('SELECT employee_data.get_nacionalities_list() as result;');
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

const getParishList = (municipalityID, callback) => {
  const query = util.format('SELECT employee_data.get_parish_list(param_municipality_id := %d) as result;', municipalityID);
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

const getCategoryType = (categorytypeID, callback) => {
  const query = util.format('SELECT employee_data.get_category_type(param_categorytypeID := %d);', categorytypeID);
  return pool.query(query, (err, res) => {
    if (err) {
      debug(err.stack);
    } else {
      const categorytype = res.rows[0].get_category_type;
      debug('EmployeeModel: ', categorytype);
      callback(categorytype);
    }
  });
};


const getdedicationtype = (dedicationtypeID, callback) => {
  const query = util.format('SELECT employee_data.get_dedication_type(param_dedicationtypeID := %d);', dedicationtypeID);
  return pool.query(query, (err, res) => {
    if (err) {
      debug(err.stack);
    } else {
      const dedicationtype = res.rows[0].get_dedication_type;
      debug('EmployeeModel: ', dedicationtype);
      callback(dedicationtype);
    }
  });
};

const getDedicationTypesList = (callback) => {
  const query = util.format('SELECT employee_data.get_dedication_types_list() as result;');
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

const getExecuntingUnit = (ExecuntingUnitID, callback) => {
  const query = util.format('SELECT employee_data.get_execunting_unit(param_ExecuntingUnitID := %d);', ExecuntingUnitID);
  return pool.query(query, (err, res) => {
    if (err) {
      debug(err.stack);
    } else {
      const ExecuntingUnit = res.rows[0].get_execunting_unit;
      debug('EmployeeModel: ', ExecuntingUnit);
      callback(ExecuntingUnit);
    }
  });
};

const getExecuntingUnitForFilterList = (codeFilter, callback) => {
  const query = util.format("SELECT employee_data.get_execunting_unit_filter_code(param_code := '%s') as result;",
    codeFilter);
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

const getExecuntingUnitList = (callback) => {
  const query = util.format('SELECT employee_data.get_execunting_unit_list() as result;');
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

const getCategoryTypesList = (callback) => {
  const query = util.format('SELECT employee_data.get_category_types_list() as result;');
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


const getIncomeTypeList = (callback) => {
  const query = util.format('SELECT employee_data.get_income_type_list() as result;');
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

const getIngressList = (callback) => {
  const query = util.format('SELECT employee_data.get_ingress_list() as result;');
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


const getDocumentationsList = (callback) => {
  const query = util.format('SELECT employee_data.get_documentations_list() as result;');
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

const getEmployeeIdacCodeList = (callback) => {
  const query = util.format('SELECT employee_data.get_employee_idac_code_list() as result;');
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

const getEmployeeSalariesFilterSalaryList = (callback) => {
  const query = util.format('SELECT employee_data.get_employee_salaries_filter_salay_list() as result;');
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

const getEmployeeSalariesSalaryList = (callback) => {
  const query = util.format('SELECT employee_data.get_employee_salaries_list() as result;');
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

const getGendersList = (callback) => {
  const query = util.format('SELECT employee_data.get_genders_list() as result;');
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

const getIdacCodesFilterVacantDateNotNullList = (execIds, callback) => {
  const query = util.format('SELECT employee_data.get_idac_codes_filter_vacant_date_not_null_exec_unit_list(param_execunting_unit_id := ARRAY[%s]) as result;',
    execIds);
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

const getIdacCodesFilterVacantDateNullList = (callback) => {
  const query = util.format('SELECT employee_data.get_idac_codes_filter_vacant_date_null_list() as result;');
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

const getIdacCodesList = (callback) => {
  const query = util.format('SELECT employee_data.get_idac_codes_list() as result;');
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

const getSalaryForCategoryTypeList = (categoryId, callback) => {
  const query = util.format('SELECT faculty_data.get_salary_for_category_type_list(param_category_id := %d) as result;',
    categoryId);
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

const getSalaryForDedicationTypeCategoryTypeList = (dedicationId, categoryId, callback) => {
  const query = util.format('SELECT faculty_data.get_salary_for_dedication_type_category_type_list(param_dedication_id:= %d, param_category_id:= %d) as result;',
    dedicationId, categoryId);
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

const getSalaryForDedicationTypeList = (dedicationId, callback) => {
  const query = util.format('SELECT faculty_data.get_salary_for_dedication_type_list(param_dedication_id := %d) as result;',
    dedicationId);
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

const getSalaryList = (callback) => {
  const query = util.format('SELECT employee_data.get_salary_list() as result;');
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
  getSalaryForDedicationTypeCategoryTypeList,
  getSalaryForDedicationTypeList,
  getSalaryList,
  getExecuntingUnitForFilterList,
};
