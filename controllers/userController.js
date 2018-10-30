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
    UserModel.getUbicationsList((err, getUbicationsListData) => {
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
    UserModel.getUserRoleList((err, getUserRoleListData) => {
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

const addUser = (req, res) => {
  const result = {};
  debug('req.body.length: ', Object.keys(req.body).length);
  if (Object.keys(req.body).length !== 5) {
    debug('request bad params not received');
    result.parambad = 'request bad';
    res.status(400).send(result);
  } else {
    const name = req.body.param_name;
    const surname = req.body.param_surname;
    const email = req.body.param_email;
    const pass = req.body.param_password;
    const ubicationId = req.body.param_ubication_id;
    const UbicationUserId = req.body.param_ubication_user_id;
    debug('req.body: ', req.body);
    UserModel.addNewUser(name, surname, email, pass, ubicationId, UbicationUserId, (err, userInsert) => {
      if (err) {
        result.messageError = err;
        res.status(400).send(result);
      } else {
        debug('FacultyController: ', userInsert);
        res.send(userInsert);
      }
    });
  }
};

module.exports = {
  getAllRolesList,
  getAllSecurityAnswerFilterQuestionList,
  getAllSecurityAnswerList,
  getAllSecurityQuestionsList,
  getAllUbicationsList,
  getAllUserRoleList,
  addUser,
};
