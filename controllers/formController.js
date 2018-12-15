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
    if (Object.keys(req.body).length !== 3) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const employee = req.body.param_employee;
      const formMovPeronsal = req.body.param_form_movement_personal;
      const userID = req.body.param_user_id;
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
    if (Object.keys(req.body).length !== 1) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const identification = req.body.param_identification;
      formModel.getFormMovPersonal(identification, (err, formMovPersonal) => {
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

module.exports = {
  getAllMovementTypeslist,
  addFormOfice,
  addFormMovementPersonal,
  createCodeFormOfice,
  createCodeFormMovPer,
  getFormMovPersonal,
};
