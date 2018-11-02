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

const getNacionalitiesList  = (callback) => {
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



const getDocumentationsList  = (callback) => {
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

const getEmployeeIdacCodeList  = (callback) => {
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

const getEmployeeSalariesFilterSalaryList  = (callback) => {
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

const getEmployeeSalariesSalaryList  = (callback) => {
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



const getIdacCodesFilterVacantDateNotNullList  = (callback) => {
  const query = util.format('SELECT employee_data.get_idac_codes_filter_vacant_date_not_null_list() as result;');
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

const getIdacCodesFilterVacantDateNullList  = (callback) => {
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

const getIdacCodesList  = (callback) => {
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

const getSalaryForDedicationTypeCategoryTypeList = (dedicationId ,categoryId, callback) => {
  const query = util.format('SELECT faculty_data.get_salary_for_dedication_type_category_type_list(param_dedication_id:= %d, param_category_id:= %d) as result;',
    dedicationId,categoryId);
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

const getSalaryList  = (callback) => {
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

const Insertemployees = ( nacionality_id, documentation_id,identification,first_name,second_name,surname,second_surname,birth_date, gender_id, email,state_id, municipality_id,parish_id,ubication, address, housing_type, housing_identifier,apartament, school_id,institute_id,cordination_id,
             departament_id,chair_id,first_mobile_phone_number, second_mobile_phone_number,local_phone_number,ingress_id, income_type_id,
            admission_date,last_updated_date,retirement_date, userID, callback) => {
             const query = util.format("SELECT employee_data.employee_insert(param_nacionality_id := %d, param_documentation_id := %d, param_identification := '%s', param_first_name := '%s', param_second_name := '%s', param_surname := '%s', param_second_surname := '%s',"
            +" param_birth_date := '%s', param_gender_id := %d, param_email := '%s', param_state_id := %d, param_municipality_id := %d, param_parish_id := %d, param_ubication := '%s', param_address := '%s', param_housing_type := '%s', "
            +" param_housing_identifier := '%s',param_apartament := ''%s', param_school_id := %d, param_institute_id := %d, param_cordination_id := %d, param_departament_id := %d, param_chair_id := %d, param_first_mobile_phone_number := '%s', "
            +" param_second_mobile_phone_number := %s ,param_local_phone_number  :=%s  ,param_ingress_id  := %d,   param_income_type_id  := %d, param_admission_date  := CLOCK_TIMESTAMP(), param_last_updated_date := '%s', param_retirement_date := '%s', param_user_id := %d) as result;",
            nacionality_id, documentation_id,identification,first_name,second_name,surname,second_surname,birth_date, gender_id, email,state_id, municipality_id,parish_id,ubication, address, housing_type,  housing_identifier,apartament, school_id,institute_id,cordination_id,
             departament_id,chair_id,first_mobile_phone_number, second_mobile_phone_number,local_phone_number,ingress_id, income_type_id,
            admission_date,last_updated_date,retirement_date, userID );
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      data.result = res.rows[0].result;
      callback(false, data);
    } else {
      debug('err in the query: ', err);
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
  Insertemployees
};
