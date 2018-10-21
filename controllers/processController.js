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
        debug('ProcessController: ', ProcessFormMovementPersonalListData);
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
        debug('ProcessController: ', ProcessFormOficeListData);
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
    ProcessModel.getgetStatusProcessFormList((err, getStatusProcessFormListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('ProcessController: ', StatusProcessFormListData);
        res.send(StatusProcessFormListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

module.exports = {
  getAllProcessFormMovementPersonalList,
  getAllProcessFormOficeList,
  getAllStatusProcessFormList,
};