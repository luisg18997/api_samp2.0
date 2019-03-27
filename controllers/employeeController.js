const appName = 'EmployeeController';
const debug = require('debug')(appName);
const EmployeeModel = require('../models/employeeModel.js');

const getAllStatesList = (req, res) => {
  const result = {};
  try {
    EmployeeModel.getStatesList((err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllStatesList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllStatesList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllMunicipalitiesList = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (req.body.param_state_id === undefined) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const stateID = req.body.param_state_id;

      EmployeeModel.getMunicipalitiesList(stateID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getAllMunicipalitiesList: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getAllMunicipalitiesList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllNacionalitiesList = (req, res) => {
  const result = {};
  try {
    EmployeeModel.getNacionalitiesList((err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllNacionalitiesList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllNacionalitiesList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllParishList = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (req.body.param_municipality_id === undefined) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const municipalityID = req.body.param_municipality_id;

      EmployeeModel.getParishList(municipalityID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getAllParishList: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getAllParishList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllCategoryType = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (req.body.categorytypeID === undefined) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const categorytypeID = req.body.param_categorytypeID;

      EmployeeModel.getCategoryType(categorytypeID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getAllCategoryType: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getAllCategoryType of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllCategoryTypesList = (req, res) => {
  const result = {};
  try {
    EmployeeModel.getCategoryTypesList((err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllCategoryTypesList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllCategoryTypesList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllDedicationTypesList = (req, res) => {
  const result = {};
  try {
    EmployeeModel.getDedicationTypesList((err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllDedicationTypesList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllDedicationTypesList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllExecuntingUnitFilter = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (req.body.param_code_filter === undefined) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const codeFilter = req.body.param_code_filter;

      EmployeeModel.getExecuntingUnitForFilterList(codeFilter, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getAllExecuntingUnitFilter: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getAllExecuntingUnitFilter of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getExecuntingUnit = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (req.body.param_ExecuntingUnitID === undefined) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const ExecuntingUnitID = req.body.param_ExecuntingUnitID;

      EmployeeModel.getExecuntingUnit(ExecuntingUnitID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getExecuntingUnit: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getExecuntingUnit of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllExecuntingUnitList = (req, res) => {
  const result = {};
  try {
    EmployeeModel.getExecuntingUnitList((err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllExecuntingUnitList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllExecuntingUnitList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllIncomeTypeList = (req, res) => {
  const result = {};
  try {
    EmployeeModel.getIncomeTypeList((err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllIncomeTypeList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllIncomeTypeList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllIngressList = (req, res) => {
  const result = {};
  try {
    EmployeeModel.getIngressList((err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllIngressList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllIngressList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllDocumentationsList = (req, res) => {
  const result = {};
  try {
    EmployeeModel.getDocumentationsList((err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllDocumentationsList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllDocumentationsList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};


const getAllEmployeeIdacCodeList = (req, res) => {
  const result = {};
  try {
    EmployeeModel.getEmployeeIdacCodeList((err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllEmployeeIdacCodeList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllEmployeeIdacCodeList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllEmployeeSalariesFilterSalaryList = (req, res) => {
  const result = {};
  try {
    EmployeeModel.getEmployeeSalariesFilterSalaryList(
      (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getAllEmployeeSalariesFilterSalaryList: ', data);
          res.send(data);
        }
      },
    );
  } catch (e) {
    debug('error catch in the funcion getAllEmployeeSalariesFilterSalaryList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllEmployeeSalariesSalaryList = (req, res) => {
  const result = {};
  try {
    EmployeeModel.getEmployeeSalariesSalaryList((err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllEmployeeSalariesSalaryList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllEmployeeSalariesSalaryList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllGendersList = (req, res) => {
  const result = {};
  try {
    EmployeeModel.getGendersList((err, GendersListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('getAllGendersList: ', GendersListData);
        res.send(GendersListData);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllGendersList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllIdacCodesFilterVacantDateNotNullList = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (req.body.param_exec_unit_ids === undefined) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const execIds = req.body.param_exec_unit_ids.toString();
      EmployeeModel.getIdacCodesFilterVacantDateNotNullList(execIds,
        (err, data) => {
          if (err) {
            result.messageError = err;
            res.send(result);
          } else {
            debug('getAllIdacCodesFilterVacantDateNotNullList: ', data);
            res.send(data);
          }
        });
    }
  } catch (e) {
    debug('error catch in the funcion getAllIdacCodesFilterVacantDateNotNullList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllIdacCodesFilterVacantDateNullList = (req, res) => {
  const result = {};
  try {
    EmployeeModel.getIdacCodesFilterVacantDateNullList(
      (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getAllIdacCodesFilterVacantDateNullList: ', data);
          res.send(data);
        }
      },
    );
  } catch (e) {
    debug('error catch in the funcion getAllIdacCodesFilterVacantDateNullList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllIdacCodesList = (req, res) => {
  const result = {};
  try {
    EmployeeModel.getIdacCodesList((err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllIdacCodesList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllIdacCodesList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllSalaryForCategoryTypeList = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (req.body.categoryId === undefined) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const categoryId = req.body.param_category_id;

      EmployeeModel.getSalaryForCategoryTypeList(categoryId,
        (err, data) => {
          if (err) {
            result.messageError = err;
            res.send(result);
          } else {
            debug('getAllSalaryForCategoryTypeList: ', data);
            res.send(data);
          }
        });
    }
  } catch (e) {
    debug('error catch in the funcion getAllSalaryForCategoryTypeList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getSalaryDedicationTypeCategoryType = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 2) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const dedicationID = req.body.param_dedication_id;
      const categoryID = req.body.param_category_id;

      EmployeeModel.getSalaryDedicationCategoryType(dedicationID, categoryID,
        (err, data) => {
          if (err) {
            result.messageError = err;
            res.send(result);
          } else {
            debug('getSalaryDedicationTypeCategoryType: ', data);
            res.send(data);
          }
        });
    }
  } catch (e) {
    debug('error catch in the funcion getSalaryDedicationTypeCategoryType of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllSalaryForDedicationTypeList = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (req.body.dedicationId === undefined) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const dedicationId = req.body.param_dedication_id;

      EmployeeModel.getSalaryForDedicationTypeList(dedicationId,
        (err, data) => {
          if (err) {
            result.messageError = err;
            res.status(404).send(result);
          } else {
            debug('getAllSalaryForDedicationTypeList: ', data);
            res.send(data);
          }
        });
    }
  } catch (e) {
    debug('error catch in the funcion getAllSalaryForDedicationTypeList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllSalaryList = (req, res) => {
  const result = {};
  try {
    EmployeeModel.getSalaryList((err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllSalaryList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllSalaryList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getEmployeesList = (req, res) => {
  const result = {};
  try {
    if (Object.keys(req.body).length !== 3) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const schoolID = req.body.param_school_id;
      const instituteID = req.body.param_institute_id;
      const coordinationID = req.body.param_coordination_id;
      EmployeeModel.getAllEmployeesList(schoolID, instituteID, coordinationID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getEmployeesList: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getEmployeesList of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getEmployee = (req, res) => {
  const result = {};
  try {
    if (Object.keys(req.body).length !== 1) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const employeeID = req.body.param_id;
      EmployeeModel.getEmployee(employeeID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getEmployee: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getEmployee of EmployeeController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

module.exports = {
  getAllStatesList,
  getAllMunicipalitiesList,
  getAllNacionalitiesList,
  getAllParishList,
  getAllCategoryType,
  getAllCategoryTypesList,
  getAllDedicationTypesList,
  getExecuntingUnit,
  getAllExecuntingUnitList,
  getAllIncomeTypeList,
  getAllIngressList,
  getAllDocumentationsList,
  getAllEmployeeIdacCodeList,
  getAllEmployeeSalariesFilterSalaryList,
  getAllEmployeeSalariesSalaryList,
  getAllGendersList,
  getAllIdacCodesFilterVacantDateNotNullList,
  getAllIdacCodesFilterVacantDateNullList,
  getAllIdacCodesList,
  getAllSalaryForCategoryTypeList,
  getSalaryDedicationTypeCategoryType,
  getAllSalaryForDedicationTypeList,
  getAllSalaryList,
  getAllExecuntingUnitFilter,
  getEmployeesList,
  getEmployee,
};
