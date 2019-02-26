const appName = 'ProcessController';
const debug = require('debug')(appName);

const ProcessModel = require('../models/ProcessModel.js');

const getAllProcessFormMovementPersonalList = (req, res) => {
  const result = {};
  try {
    ProcessModel.getProcessFormMovementPersonalList((err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllProcessFormMovementPersonalList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllProcessFormMovementPersonalList of ProcessController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllProcessFormOficeList = (req, res) => {
  const result = {};
  try {
    ProcessModel.getProcessFormOficeList((err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllProcessFormOficeList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllProcessFormOficeList of ProcessController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllStatusProcessFormList = (req, res) => {
  const result = {};
  try {
    ProcessModel.getgetStatusProcessFormList((err, data) => {
      if (err) {
        result.messageError = err;
        res.send(result);
      } else {
        debug('getAllStatusProcessFormList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllStatusProcessFormList of ProcessController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const updateAllColumnsProcessOfficialForm = (req, res) => {
  const result = {};
  try {
    debug('req.body: ', req.body);
    if (Object.keys(req.body).length !== 8) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      debug('req.headers.authorization: ', req.headers.authorization);
      const processID = req.body.param_process_id;
      const userID = req.body.param_user_id;
      const officialFormID = req.body.param_official_form_id;
      const ubicationID = req.body.param_ubication_id;
      const observation = req.body.param_observation;
      const statusProcessFormID = req.body.param_status_process_form_id;
      const isActive = req.body.param_is_active;
      const isDeleted = req.body.param_is_deleted;
      ProcessModel.updateAllColumnsProcessOfficialForm(processID, userID, officialFormID,
        ubicationID, observation, statusProcessFormID, isActive,
        isDeleted, (err, data) => {
          if (err) {
            result.messageError = err;
            res.send(result);
          } else {
            debug('updateAllColumnsProcessOfficialForm: ', data);
            res.send(data);
          }
        });
    }
  } catch (e) {
    debug('error catch in the funcion updateAllColumnsProcessOfficialForm of ProcessController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const updateAllColumnsProcessMovPersonalForm = (req, res) => {
  const result = {};
  try {
    debug('req.body: ', req.body);
    if (Object.keys(req.body).length !== 8) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const processID = req.body.param_process_id;
      const userID = req.body.param_user_id;
      const movPersonalFormID = req.body.param_mov_personal_form_id;
      const ubicationID = req.body.param_ubication_id;
      const observation = req.body.param_observation;
      const statusProcessFormID = req.body.param_status_process_form_id;
      const isActive = req.body.param_is_active;
      const isDeleted = req.body.param_is_deleted;
      ProcessModel.updateAllColumnsProcessMovPersonalForm(processID, userID, movPersonalFormID,
        ubicationID, observation, statusProcessFormID, isActive, isDeleted,
        (err, data) => {
          if (err) {
            result.messageError = err;
            res.send(result);
          } else {
            debug('updateAllColumnsProcessMovPersonalForm: ', data);
            res.send(data);
          }
        });
    }
  } catch (e) {
    debug('error catch in the funcion updateAllColumnsProcessMovPersonalForm of ProcessController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

module.exports = {
  getAllProcessFormMovementPersonalList,
  getAllProcessFormOficeList,
  getAllStatusProcessFormList,
  updateAllColumnsProcessOfficialForm,
  updateAllColumnsProcessMovPersonalForm,
};
