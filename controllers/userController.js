const appName = 'UserController';
const debug = require('debug')(appName);

const UserModel = require('../models/UsersModel.js');

const getAllRolesList = (req, res) => {
  try {
    const result = {};
    UserModel.getRolesList((err, RolesListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('UserController: ', RolesListData);
        res.send(RolesListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getAllSecurityAnswerFilterQuestionList = (req, res) => {
  try {
    const result = {};
    UserModel.getSecurityAnswerFilterQuestionList((err, SecurityAnswerFilterQuestionListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('UserController: ', SecurityAnswerFilterQuestionListData);
        res.send(SecurityAnswerFilterQuestionListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getAllSecurityAnswerList = (req, res) => {
  try {
    const result = {};
    UserModel.getSecurityAnswerList((err, SecurityAnswerListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('UserController: ', SecurityAnswerListData);
        res.send(SecurityAnswerListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getAllSecurityQuestionsList = (req, res) => {
  try {
    const result = {};
    UserModel.getSecurityQuestionsList((err, SecurityQuestionstData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('UserController: ', SecurityQuestionstData);
        res.send(SecurityQuestionstData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getAllUbicationsList = (req, res) => {
  try {
    const result = {};
    UserModel.getCoordinationLists((err, getUbicationsListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('UserController: ', getUbicationsListData);
        res.send(getUbicationsListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const getAllUserRoleList = (req, res) => {
  try {
    const result = {};
    UserModel.getAllUserRoleList((err, getUserRoleListData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('UserController: ', getUserRoleListData);
        res.send(getUserRoleListData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

module.exports = {
  getAllRolesList,
  getAllSecurityAnswerFilterQuestionList,
  getAllSecurityAnswerList,
  getAllSecurityQuestionsList,
  getAllUbicationsList,
  getAllUserRoleList,
};