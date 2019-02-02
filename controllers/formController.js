const appName = 'formController';
const debug = require('debug')(appName);

const formModel = require('../models/formModel.js');

const getAllMovementTypeslist = (req, res) => {
  try {
    const result = {};
    formModel.getMovementTypeslist((err, formData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('formDataController: ', formData);
        res.send(formData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const addFormOfice = (req, res) => {
  try {
    const result = {};
    debug('req.body: ', req.body);
    if (Object.keys(req.body).length !== 4) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const employee = req.body.param_employee;
      const formOfice = req.body.param_form_ofice;
      const userID = req.body.param_user_id;
      if (req.body.param_employee_id !== 0) {
        employee.employee_id = req.body.param_employee_id;
      }
      formModel.addNewFormOfice(employee, formOfice, userID,
        (err, NewFormOfice) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('formDataController: ', NewFormOfice);
            res.send(NewFormOfice);
          }
        });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const addFormMovementPersonal = (req, res) => {
  try {
    const result = {};
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
        (err, NewFormMovPersonal) => {
          if (err) {
            result.messageError = err;
            res.status(404).send(result);
          } else {
            debug('formDataController: ', NewFormMovPersonal);
            res.send(NewFormMovPersonal);
          }
        });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const createCodeFormOfice = (req, res) => {
  try {
    const result = {};
    if (Object.keys(req.body).length !== 3) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const schoolID = req.body.param_school_id;
      const instituteID = req.body.param_institute_id;
      const coordinationID = req.body.param_coordination_id;
      formModel.getCreateCodeFormOFice(schoolID, instituteID,
        coordinationID, (err, CodeFormOfice) => {
          if (err) {
            result.messageError = err;
            res.status(404).send(result);
          } else {
            debug('formDataController: ', CodeFormOfice);
            res.send(CodeFormOfice);
          }
        });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const createCodeFormMovPer = (req, res) => {
  try {
    const result = {};
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
        coordinationID, code, (err, CodeFormOfice) => {
          if (err) {
            result.messageError = err;
            res.status(404).send(result);
          } else {
            debug('formDataController: ', CodeFormOfice);
            res.send(CodeFormOfice);
          }
        });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getFormMovPersonal = (req, res) => {
  try {
    const result = {};
    if (Object.keys(req.body).length !== 2) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const identification = req.body.param_identification;
      const ubicationID = req.body.param_ubication_id;
      formModel.getFormMovPersonal(identification, ubicationID, (err, formMovPersonal) => {
        if (err) {
          result.messageError = err;
          res.status(404).send(result);
        } else {
          debug('formDataController: ', formMovPersonal);
          res.send(formMovPersonal);
        }
      });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getFormsList = (req, res) => {
  try {
    const result = {};
    if (Object.keys(req.body).length !== 2) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const ubicationID = req.body.param_ubication_id;
      const ubicationFormID = req.body.param_ubication_form_id;
      formModel.getAllForms(ubicationID, ubicationFormID, (err, forms) => {
        if (err) {
          result.messageError = err;
          res.status(404).send(result);
        } else {
          debug('formDataController: ', forms);
          res.send(forms);
        }
      });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getFormOficesList = (req, res) => {
  try {
    const result = {};
    if (Object.keys(req.body).length !== 3) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const schoolID = req.body.param_school_id;
      const instituteID = req.body.param_institute_id;
      const coordinationID = req.body.param_coordination_id;
      formModel.getAllFormsOfice(schoolID, instituteID, coordinationID, (err, formOfice) => {
        if (err) {
          result.messageError = err;
          res.status(404).send(result);
        } else {
          debug('formDataController: ', formOfice);
          res.send(formOfice);
        }
      });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getFormOfficial = (req, res) => {
  try {
    const result = {};
    if (Object.keys(req.body).length !== 2) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const identification = req.body.param_identification;
      const ubication = req.body.param_ubication_id;
      formModel.getFormOfficial(identification, ubication, (err, formOfficial) => {
        if (err) {
          result.messageError = err;
          res.status(404).send(result);
        } else {
          debug('formOfficial: ', formOfficial);
          res.send(formOfficial);
        }
      });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const updateOfficialApproval = (req, res) => {
  try {
    const result = {};
    if (Object.keys(req.body).length !== 2) {
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
        statusProcessFormID, observation, isActive, isDeleted, userID, (err, formOfficial) => {
          if (err) {
            result.messageError = err;
            res.status(404).send(result);
          } else {
            debug('updateOfficialApproval: ', formOfficial);
            res.send(formOfficial);
          }
        });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
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
};
