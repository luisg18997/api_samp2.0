const appName = 'formController';
const debug = require('debug')(appName);

const formModel = require('../models/formModel.js');

const getAllMovementTypeslist = (req, res) => {
  const result = {};
  try {
    formModel.getMovementTypeslist((err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllMovementTypeslist: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllMovementTypeslist of FormController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllAccountantTypeslist = (req, res) => {
  const result = {};
  try {
    formModel.getAccountantTypeslist((err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllAccountantTypeslist: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllAccountantTypeslist of FormController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllProgramTypeslist = (req, res) => {
  const result = {};
  try {
    formModel.getProgramTypeslist((err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllProgramTypeslist: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllProgramTypeslist of FormController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const addFormOfice = (req, res) => {
  const result = {};
  try {
    debug('req.body: ', req.body);
    if (Object.keys(req.body).length !== 4) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const employee = req.body.param_employee;
      const officialForm = req.body.param_form_ofice;
      const userID = req.body.param_user_id;
      if (req.body.param_employee_id !== 0) {
        employee.employee_id = req.body.param_employee_id;
      }
      formModel.addNewFormOfice(employee, officialForm, userID,
        (err, data) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('addFormOfice: ', data);
            res.send(data);
          }
        });
    }
  } catch (e) {
    debug('error catch in the funcion addFormOfice of FormController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const addFormMovementPersonal = (req, res) => {
  const result = {};
  try {
    if (Object.keys(req.body).length !== 4) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const employee = req.body.param_employee;
      const formMovPeronsal = req.body.param_form_movement_personal;
      const userID = req.body.param_user_id;
      if (req.body.param_employee_salary_id !== 0) {
        employee.employee_salary_id = req.body.param_employee_salary_id;
      }
      formModel.addNewFormMovPeronsal(employee, formMovPeronsal, userID,
        (err, data) => {
          if (err) {
            result.messageError = err;
            res.send(result);
          } else {
            debug('addFormMovementPersonal: ', data);
            res.send(data);
          }
        });
    }
  } catch (e) {
    debug('error catch in the funcion addFormMovementPersonal of FormController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const createCodeFormOfice = (req, res) => {
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
      formModel.getCreateCodeFormOFice(schoolID, instituteID,
        coordinationID, (err, data) => {
          if (err) {
            result.messageError = err;
            res.send(result);
          } else {
            debug('createCodeFormOfice: ', data);
            res.send(data);
          }
        });
    }
  } catch (e) {
    debug('error catch in the funcion createCodeFormOfice of FormController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const createCodeFormMovPer = (req, res) => {
  const result = {};
  try {
    if (Object.keys(req.body).length !== 4) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const schoolID = req.body.param_school_id;
      const instituteID = req.body.param_institute_id;
      const coordinationID = req.body.param_coordination_id;
      const code = req.body.param_code;
      formModel.getCreateCodeFormMovPer(schoolID, instituteID,
        coordinationID, code, (err, data) => {
          if (err) {
            result.messageError = err;
            res.send(result);
          } else {
            debug('createCodeFormMovPer: ', data);
            res.send(data);
          }
        });
    }
  } catch (e) {
    debug('error catch in the funcion createCodeFormMovPer of FormController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getFormMovPersonal = (req, res) => {
  const result = {};
  try {
    if (Object.keys(req.body).length !== 2) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const identification = req.body.param_identification;
      const ubicationID = req.body.param_ubication_id;
      formModel.getFormMovPersonal(identification, ubicationID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getFormMovPersonal: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getFormMovPersonal of FormController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getFormsList = (req, res) => {
  const result = {};
  try {
    if (Object.keys(req.body).length !== 2) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const ubicationID = req.body.param_ubication_id;
      const ubicationFormID = req.body.param_ubication_form_id;
      formModel.getAllForms(ubicationID, ubicationFormID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getFormsList: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getFormsList of FormController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getFormOficesList = (req, res) => {
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
      formModel.getAllFormsOfice(schoolID, instituteID, coordinationID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getFormOficesList: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getFormOficesList of FormController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getFormOfficial = (req, res) => {
  const result = {};
  try {
    if (Object.keys(req.body).length !== 2) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const identification = req.body.param_identification;
      const ubication = req.body.param_ubication_id;
      formModel.getFormOfficial(identification, ubication, (err, data) => {
        if (err) {
          result.messageError = err;
          res.send(result);
        } else {
          debug('getFormOfficial: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getFormOfficial of FormController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const updateOfficialApproval = (req, res) => {
  const result = {};
  try {
    if (Object.keys(req.body).length !== 8) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const officialID = req.body.param_id;
      const officialProcessID = req.body.param_official_form_process_id;
      const ubicationID = req.body.param_ubication_id;
      const statusProcessFormID = req.body.param_status_process_form_id;
      const observation = req.body.param_observation;
      const isActive = req.body.param_is_active;
      const isDeleted = req.body.param_is_deleted;
      const userID = req.body.param_user_id;
      formModel.updateOfficialApproval(officialID, officialProcessID, ubicationID,
        statusProcessFormID, observation, isActive, isDeleted, userID, (err, data) => {
          if (err) {
            result.messageError = err;
            res.send(result);
          } else {
            debug('updateOfficialApproval: ', data);
            res.send(data);
          }
        });
    }
  } catch (e) {
    debug('error catch in the funcion updateOfficialApproval of FormController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const updateMovPersonalApproval = (req, res) => {
  const result = {};
  try {
    if (Object.keys(req.body).length !== 12) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const movPersonalID = req.body.param_id;
      const movPersonalProcessID = req.body.param_mov_personal_form_process_id;
      const employeeID = req.body.param_employee_id;
      const movementTypeID = req.body.param_movement_type_id;
      const ubicationID = req.body.param_ubication_id;
      const statusProcessFormID = req.body.param_status_process_form_id;
      const accountatTypeID = req.body.param_accountant_type_id;
      const programID = req.body.param_progam_type_id;
      const observation = req.body.param_observation;
      const isActive = req.body.param_is_active;
      const isDeleted = req.body.param_is_deleted;
      const userID = req.body.param_user_id;
      formModel.updateMovPersonalApproval(movPersonalID, movPersonalProcessID, employeeID,
        movementTypeID, ubicationID, statusProcessFormID, accountatTypeID, programID,
        observation, isActive, isDeleted, userID, (err, data) => {
          if (err) {
            result.messageError = err;
            res.send(result);
          } else {
            debug('updateMovPersonalApproval: ', data);
            res.send(data);
          }
        });
    }
  } catch (e) {
    debug('error catch in the funcion updateMovPersonalApproval of FormController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getOfficialFormApprovalList = (req, res) => {
  const result = {};
  try {
    if (Object.keys(req.body).length !== 4) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const ubicationID = req.body.param_ubication_id;
      const schoolID = req.body.param_school_id;
      const instituteID = req.body.param_institute_id;
      const coordinationID = req.body.param_coordination_id;
      formModel.getAllOfficialFormApproval(ubicationID, schoolID, instituteID, coordinationID,
        (err, data) => {
          if (err) {
            result.messageError = err;
            res.send(result);
          } else {
            debug('getOfficialFormApprovalList: ', data);
            res.send(data);
          }
        });
    }
  } catch (e) {
    debug('error catch in the funcion getOfficialFormApprovalList of FormController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getOfficialFormRejectedList = (req, res) => {
  const result = {};
  try {
    if (Object.keys(req.body).length !== 4) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const ubicationID = req.body.param_ubication_id;
      const schoolID = req.body.param_school_id;
      const instituteID = req.body.param_institute_id;
      const coordinationID = req.body.param_coordination_id;
      formModel.getAllOfficialFormRejected(ubicationID, schoolID, instituteID, coordinationID,
        (err, data) => {
          if (err) {
            result.messageError = err;
            res.send(result);
          } else {
            debug('getOfficialFormRejectedList: ', data);
            res.send(data);
          }
        });
    }
  } catch (e) {
    debug('error catch in the funcion getOfficialFormRejectedList of FormController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

module.exports = {
  getAllMovementTypeslist,
  addFormOfice,
  addFormMovementPersonal,
  createCodeFormOfice,
  createCodeFormMovPer,
  getFormMovPersonal,
  getFormsList,
  getFormOficesList,
  getFormOfficial,
  updateOfficialApproval,
  getAllAccountantTypeslist,
  getAllProgramTypeslist,
  updateMovPersonalApproval,
  getOfficialFormApprovalList,
  getOfficialFormRejectedList,
};
