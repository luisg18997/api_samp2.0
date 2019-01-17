const appName = 'ProcessController';
const debug = require('debug')(appName);

const ProcessModel = require('../models/ProcessModel.js');

const getAllProcessFormMovementPersonalList = (req, res) => {
  try {
    const result = {};
    ProcessModel.getProcessFormMovementPersonalList((err, ProcessFormMovementPersonalListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('ProcessFormMovementPersonalListData: ', ProcessFormMovementPersonalListData);
        res.send(ProcessFormMovementPersonalListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getAllProcessFormOficeList = (req, res) => {
  try {
    const result = {};
    ProcessModel.getProcessFormOficeList((err, ProcessFormOficeListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('ProcessFormOficeListData: ', ProcessFormOficeListData);
        res.send(ProcessFormOficeListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getAllStatusProcessFormList = (req, res) => {
  try {
    const result = {};
    ProcessModel.getgetStatusProcessFormList((err, statusProcessFormListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('statusProcessFormListData: ', statusProcessFormListData);
        res.send(statusProcessFormListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const updateAllColumnsProcessOfficialForm = (req, res) => {
  try {
    const result = {};
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
        isDeleted, (err, updateProcessOfficialForm) => {
          if (err) {
            result.messageError = err;
            res.status(404).send(result);
          } else {
            debug('updateProcessOfficialForm: ', updateProcessOfficialForm);
            res.send(updateProcessOfficialForm);
          }
        });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const updateAllColumnsProcessMovPersonalForm = (req, res) => {
  try {
    const result = {};
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
        (err, updateProcessMovPersonalForm) => {
          if (err) {
            result.messageError = err;
            res.status(404).send(result);
          } else {
            debug('updateProcessMovPersonalForm: ', updateProcessMovPersonalForm);
            res.send(updateProcessMovPersonalForm);
          }
        });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

module.exports = {
  getAllProcessFormMovementPersonalList,
  getAllProcessFormOficeList,
  getAllStatusProcessFormList,
  updateAllColumnsProcessOfficialForm,
  updateAllColumnsProcessMovPersonalForm,
};
