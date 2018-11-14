const appName = 'formDataController';
const debug = require('debug')(appName);

const formDataModel = require('../models/formDataModel.js');

const getAllMovementTypeslist = (req, res) => {
  try {
    const result = {};
    formDataModel.getMovementTypeslist((err, formData) => {
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
    if (Object.keys(req.body).length !== 3) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const employee = req.body.param_employee;
      const formOfice = req.body.param_form_ofice;
      const userID = req.body.param_user_id;
      if(req.body.param_employee_id !== 0) {
      	employee.employee_id = req.body.param_employee_id;
      }
      formDataModel.addNewFormOfice(employee, formOfice, userID,
   		 (err, NewFormOfice) => {
          if (err) {
            result.messageError = err;
            res.status(404).send(result);
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
      formDataModel.addNewFormMovPeronsal(employee, formMovPeronsal, userID,
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
      formDataModel.getCreateCodeFormOFice((err, CodeFormOfice) => {
          if (err) {
            result.messageError = err;
            res.status(404).send(result);
          } else {
            debug('formDataController: ', CodeFormOfice);
            res.send(CodeFormOfice);
          }
        });
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
};
