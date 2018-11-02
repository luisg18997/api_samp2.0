const appName = 'EmployeeController';
const debug = require('debug')(appName);

const EmployeeModel = require('../models/employeeModel.js');



const getAllStatesList = (req, res) => {
  try {
    const result = {};
    EmployeeModel.getStatesList((err, StatesData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('EmployeeController: ', StatesData);
        res.send(StatesData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getAllMunicipalitiesList = (req, res) => {
  try {
    const result = {};
    debug('req.body.length: ', Object.keys(req.body).length);
    if (req.body.param_state_id === undefined) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const stateID = req.body.param_state_id;

      EmployeeModel.getMunicipalitiesList(stateID, (err, MunicipalitieslData) => {
        if (err) {
          result.messageError = err;
          res.status(403).send(result);
        } else {
          debug('EmployeeController: ', MunicipalitieslData);
          res.send(MunicipalitieslData);
        }
      });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};



const getAllNacionalitiesList = (req, res) => {
  try {
    const result = {};
    EmployeeModel.getNacionalitiesList((err, NacionalitiesData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('EmployeeController: ', NacionalitiesData);
        res.send(NacionalitiesData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};



const getAllParishList = (req, res) => {
  try {
    const result = {};
    debug('req.body.length: ', Object.keys(req.body).length);
    if (req.body.municipalityID === undefined) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const municipalityID = req.body.param_municipality_id;

      EmployeeModel.getParishList(municipalityID, (err, ParishData) => {
        if (err) {
          result.messageError = err;
          res.status(404).send(result);
        } else {
          debug('EmployeeController: ', ParishData);
          res.send(ParishData);
        }
      });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};




const getAllCategoryType = (req, res) => {
  try {
    const result = {};
    debug('req.body.length: ', Object.keys(req.body).length);
    if (req.body.categorytypeID === undefined) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const categorytypeID = req.body.param_categorytypeID;

      EmployeeModel.getCategoryType(categorytypeID, (err, CategoryTypeData) => {
        if (err) {
          result.messageError = err;
          res.status(404).send(result);
        } else {
          debug('EmployeeController: ', CategoryTypeData);
          res.send(CategoryTypeData);
        }
      });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};


const getAllCategoryTypesList = (req, res) => {
  try {
    const result = {};
    EmployeeModel.getCategoryTypesList((err, CategoryTypesListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('EmployeeController: ', CategoryTypesListData);
        res.send(CategoryTypesListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};


const getAllDedicationTypesList = (req, res) => {
  try {
    const result = {};
    EmployeeModel.getDedicationTypesList((err, DedicationTypesListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('EmployeeController: ', DedicationTypesListData);
        res.send(DedicationTypesListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};



const getAllExecuntingUnit = (req, res) => {
  try {
    const result = {};
    debug('req.body.length: ', Object.keys(req.body).length);
    if (req.body.ExecuntingUnitID === undefined) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const ExecuntingUnitID = req.body.param_ExecuntingUnitID;

      EmployeeModel.getExecuntingUnit(ExecuntingUnitID, (err, ExecuntingUnitData) => {
        if (err) {
          result.messageError = err;
          res.status(404).send(result);
        } else {
          debug('EmployeeController: ', ExecuntingUnitData);
          res.send(ExecuntingUnitData);
        }
      });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};



const getAllExecuntingUnitList = (req, res) => {
  try {
    const result = {};
    EmployeeModel.getExecuntingUnitList((err, ExecuntingUnitListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('EmployeeController: ', ExecuntingUnitListData);
        res.send(ExecuntingUnitListData);
          }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};




const getAllIncomeTypeList = (req, res) => {
  try {
    const result = {};
    EmployeeModel.getIncomeTypeList((err, IncomeTypeListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('EmployeeController: ', IncomeTypeListData);
        res.send(IncomeTypeListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getAllIngressList = (req, res) => {
  try {
    const result = {};
    EmployeeModel.getIngressList((err, IngressListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('EmployeeController: ', IngressListData);
        res.send(IngressListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getAllDocumentationsList = (req, res) => {
  try {
    const result = {};
    EmployeeModel.getDocumentationsList((err, DocumentationsListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('EmployeeController: ', DocumentationsListData);
        res.send(DocumentationsListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};


const getAllEmployeeIdacCodeList = (req, res) => {
  try {
    const result = {};
    EmployeeModel.getEmployeeIdacCodeList((err, EmployeeIdacCodeListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('EmployeeController: ', EmployeeIdacCodeListData);
        res.send(EmployeeIdacCodeListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getAllEmployeeSalariesFilterSalaryList = (req, res) => {
  try {
    const result = {};
    EmployeeModel.getEmployeeSalariesFilterSalaryList((err, EmployeeSalariesFilterSalaryListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('EmployeeController: ', EmployeeSalariesFilterSalaryListData);
        res.send(EmployeeSalariesFilterSalaryListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};


const getAllEmployeeSalariesSalaryList = (req, res) => {
  try {
    const result = {};
    EmployeeModel.getEmployeeSalariesSalaryList((err, EmployeeSalariesSalaryListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('EmployeeController: ', EmployeeSalariesSalaryListData);
        res.send(EmployeeSalariesSalaryListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};


const getAllGendersList = (req, res) => {
  try {
    const result = {};
    EmployeeModel.getGendersList((err, GendersListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('EmployeeController: ', GendersListData);
        res.send(GendersListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};



const getAllIdacCodesFilterVacantDateNotNullList = (req, res) => {
  try {
    const result = {};
    EmployeeModel.getIdacCodesFilterVacantDateNotNullList((err, IdacCodesFilterVacantDateNotNullListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('EmployeeController: ', IdacCodesFilterVacantDateNotNullListData);
        res.send(IdacCodesFilterVacantDateNotNullListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};


const getAllIdacCodesFilterVacantDateNullList = (req, res) => {
  try {
    const result = {};
    EmployeeModel.getIdacCodesFilterVacantDateNullList((err, IdacCodesFilterVacantDateNullListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('EmployeeController: ', IdacCodesFilterVacantDateNullListData);
        res.send(IdacCodesFilterVacantDateNullListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};



const getAllIdacCodesList = (req, res) => {
  try {
    const result = {};
    EmployeeModel.getIdacCodesList((err, IdacCodesListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('EmployeeController: ', IdacCodesListData);
        res.send(IdacCodesListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};



const getAllSalaryForCategoryTypeList = (req, res) => {
  try {
    const result = {};
    debug('req.body.length: ', Object.keys(req.body).length);
    if (req.body.categoryId === undefined) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const categoryId = req.body.param_category_id;

      EmployeeModel.getSalaryForCategoryTypeList(categoryId, (err, SalaryForCategoryTypeListData) => {
        if (err) {
          result.messageError = err;
          res.status(404).send(result);
        } else {
          debug('EmployeeController: ', SalaryForCategoryTypeListData);
          res.send(SalaryForCategoryTypeListData);
        }
      });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};



const getAllSalaryForDedicationTypeCategoryTypeList = (req, res) => {
  try {
    const result = {};
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 2) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const schoolID = req.body.param_school_id;
      const departamentID = req.body.param_departament_id;

      FacultyModel.getSalaryForDedicationTypeCategoryTypeList(schoolID, departamentID, (err, SalaryForDedicationTypeCategoryTypeListData) => {
        if (err) {
          result.messageError = err;
          res.status(404).send(result);
        } else {
          debug('EmployeeController: ', SalaryForDedicationTypeCategoryTypeListData);
          res.send(SalaryForDedicationTypeCategoryTypeListData);
        }
      });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};


const getAllSalaryForDedicationTypeList = (req, res) => {
  try {
    const result = {};
    debug('req.body.length: ', Object.keys(req.body).length);
    if (req.body.dedicationId === undefined) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const dedicationId = req.body.param_dedication_id;

      EmployeeModel.getSalaryForDedicationTypeList(dedicationId, (err, SalaryForCategoryTypeListData) => {
        if (err) {
          result.messageError = err;
          res.status(404).send(result);
        } else {
          debug('EmployeeController: ', SalaryForCategoryTypeListData);
          res.send(SalaryForCategoryTypeListData);
        }
      });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};



const getAllSalaryList = (req, res) => {
  try {
    const result = {};
    EmployeeModel.getSalaryList((err, SalaryListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('EmployeeController: ', SalaryListData);
        res.send(SalaryListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};


const Insertemployees = (req, res) => {
  try {
    const result = {};
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 2) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {

            const nacionality_id = req.body.param_nacionality_id;
            const documentation_id = req.body.param_documentation_id;
            const identification = req.body.param_identification;
            const first_name = req.body.param_first_name;
            const second_name = req.body.param_second_name;
            const surname = req.body.param_surname;
            const second_surname = req.body.param_second_surname;
            const birth_date = req.body.param_birth_date;
            const gender_id = req.body.param_gender_id;
            const email = req.body.param_email;
            const state_id = req.body.param_state_id;
            const municipality_id = req.body.param_municipality_id;
            const parish_id = req.body.param_parish_id;
            const ubication = req.body.param_ubication;
            const address = req.body.param_address;
            const housing_type = req.body.param_housing_type;
            const housing_identifier = req.body.param_housing_identifier;
            const apartament = req.body.param_apartament;
            const school_id = req.body.param_school_id;
            const institute_id = req.body.param_institute_id;
            const cordination_id = req.body.param_cordination_id;
            const  departament_id = req.body.param_departament_id;
            const chair_id = req.body.param_chair_id;
            const  first_mobile_phone_number = req.body.param_first_mobile_phone_number;
            const  second_mobile_phone_number = req.body.param_second_mobile_phone_number;
            const  local_phone_number = req.body.param_local_phone_number;
             const  ingress_id = req.body.param_ingress_id;
             const  income_type_id = req.body.param_income_type_id;
            const  admission_date = req.body.param_admission_date;
            const  last_updated_date = req.body.param_last_updated_date;
             const  retirement_date = req.body.param_retirement_date;
            const  userID = req.body.param_userID;


        EmployeeModel.Insertemployees(nacionality_id, documentation_id,identification,first_name,second_name,
        surname,second_surname,birth_date, gender_id, email,state_id, municipality_id,parish_id,ubication,
        address, housing_type, housing_identifier,apartament, school_id,institute_id,cordination_id,
        departament_id,chair_id,first_mobile_phone_number, second_mobile_phone_number,local_phone_number,
        ingress_id, income_type_id,admission_date,last_updated_date,retirement_date, userID, (err, Insertemployees) => {
        if (err) {
          result.messageError = err;
          res.status(404).send(result);
        } else {
          debug('EmployeeController: ', Insertemployees);
          res.send(Insertemployees);
        }
      });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
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
  getAllExecuntingUnit,
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
  getAllSalaryForDedicationTypeCategoryTypeList,
  getAllSalaryForDedicationTypeList,
  getAllSalaryList,
  Insertemployees

  };
