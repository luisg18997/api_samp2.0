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
  if (Object.keys(req.body).length !== 8) {
    debug('request bad params not received');
    result.parambad = 'request bad';
    res.status(400).send(result);
  } else {
    const name = req.body.param_name;
    const surname = req.body.param_surname;
    const email = req.body.param_email;
    const pass = req.body.param_password;
    const ubicationId = req.body.param_ubication_id;
    const schoolID = req.body.param_school_id;
    const instituteID = req.body.param_institute_id;
    const coordinationID = req.body.param_coordination_id;
    debug('req.body: ', req.body);
    UserModel.addNewUser(name, surname, email, pass, ubicationId, schoolID,
      instituteID, coordinationID, (err, userInsert) => {
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

const addUserByAdmin = (req, res) => {
  const result = {};
  debug('req.body.length: ', Object.keys(req.body).length);
  if (Object.keys(req.body).length !== 10) {
    debug('request bad params not received');
    result.parambad = 'request bad';
    res.status(400).send(result);
  } else {
    const name = req.body.param_name;
    const surname = req.body.param_surname;
    const email = req.body.param_email;
    const pass = req.body.param_password;
    const ubicationId = req.body.param_ubication_id;
    const roleUserID = req.body.param_role_user_id;
    const userID = req.body.param_user_id;
    const schoolID = req.body.param_school_id;
    const instituteID = req.body.param_institute_id;
    const coordinationID = req.body.param_coordination_id;
    debug('req.body: ', req.body);
    UserModel.addNewUser(name, surname, email, pass, ubicationId, roleUserID, userID, schoolID,
      instituteID, coordinationID, (err, userInsert) => {
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

const login = (req, res) => {
  const result = {};
  debug('req.body: ', req.body);
  debug('req.body.length: ', Object.keys(req.body).length);
  if (Object.keys(req.body).length !== 2) {
    debug('request bad params not received');
    result.parambad = 'request bad';
    res.status(400).send(result);
  } else {
    const email = req.body.param_email;
    const pass = req.body.param_password;
    debug('req.body: ', req.body);
    UserModel.login(email, pass, (err, aunthenticate) => {
      if (err) {
        result.messageError = err;
        res.status(400).send(result);
      } else {
        debug('FacultyController: ', aunthenticate);
        res.send(aunthenticate);
      }
    });
  }
};

const getALLUserValidateList = (req, res) => {
  try {
    const result = {};
    UserModel.getALLUserValidateList((err, UserValidateList) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('UserValidateList: ', UserValidateList);
        res.send(UserValidateList);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const updateUserValidate = (req, res) => {
  const result = {};
  debug('req.body.length: ', Object.keys(req.body).length);
  debug('req.body: ', req.body);
  if (Object.keys(req.body).length !== 6) {
    debug('request bad params not received');
    result.parambad = 'request bad';
    res.status(400).send(result);
  } else {
    const userID = req.body.param_id;
    const userRoleID = req.body.param_user_role_id;
    const roleID = req.body.param_role_id;
    const isActive = req.body.param_is_active;
    const isDeleted = req.body.param_is_deleted;
    const userId = req.body.param_user_id;
    debug('req.body: ', req.body);
    UserModel.updateUserValidate(userID, userRoleID, roleID, isActive, isDeleted,
      userId, (err, updateValidate) => {
        if (err) {
          result.messageError = err;
          res.status(400).send(result);
        } else {
          debug('updateUserValidate: ', updateValidate);
          res.send(updateValidate);
        }
      });
  }
};

const getUser = (req, res) => {
  const result = {};
  debug('req.body.length: ', Object.keys(req.body).length);
  if (Object.keys(req.body).length !== 1) {
    debug('request bad params not received');
    result.parambad = 'request bad';
    res.status(400).send(result);
  } else {
    const userID = req.body.param_user_id;
    debug('req.body: ', req.body);
    UserModel.getUser(userID, (err, user) => {
      if (err) {
        result.messageError = err;
        res.status(400).send(result);
      } else {
        debug('getUser: ', user);
        res.send(user);
      }
    });
  }
};

const getALLUserList = (req, res) => {
  try {
    const result = {};
    UserModel.getALLUserList((err, UserList) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('UserList: ', UserList);
        res.send(UserList);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

const updateUserAnswer = (req, res) => {
  const result = {};
  debug('req.body.length: ', Object.keys(req.body).length);
  if (Object.keys(req.body).length !== 4) {
    debug('request bad params not received');
    result.parambad = 'request bad';
    res.status(400).send(result);
  } else {
    const answerID = req.body.param_id;
    const userID = req.body.param_user_id;
    const questionID = req.body.param_question_id;
    const answer = req.body.param_answer;
    debug('req.body: ', req.body);
    UserModel.updateUserAnswer(answerID, userID, questionID, answer, (err, updateAnswer) => {
      if (err) {
        result.messageError = err;
        res.status(400).send(result);
      } else {
        debug('updateUserAnswer: ', updateAnswer);
        res.send(updateAnswer);
      }
    });
  }
};

const updateUserPassword = (req, res) => {
  const result = {};
  debug('req.body.length: ', Object.keys(req.body).length);
  if (Object.keys(req.body).length !== 2) {
    debug('request bad params not received');
    result.parambad = 'request bad';
    res.status(400).send(result);
  } else {
    const userID = req.body.param_id;
    const password = req.body.param_password;
    debug('req.body: ', req.body);
    UserModel.updateUserPassword(userID, password, (err, updatePassword) => {
      if (err) {
        result.messageError = err;
        res.status(400).send(result);
      } else {
        debug('updateUserPassword: ', updatePassword);
        res.send(updatePassword);
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
  addUserByAdmin,
  login,
  getALLUserValidateList,
  updateUserValidate,
  getUser,
  getALLUserList,
  updateUserAnswer,
  updateUserPassword,
};
