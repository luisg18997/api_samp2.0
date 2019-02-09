const appName = 'UserController';
const debug = require('debug')(appName);

const UserModel = require('../models/UsersModel.js');

const getAllRolesList = (req, res) => {
  try {
    const result = {};
    UserModel.getRolesList((err, Roles) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('getAllRolesList: ', Roles);
        res.send(Roles);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllRolesList of UserController: ', e);
    res.status(500).send(e);
  }
};

const getAllSecurityQuestionsList = (req, res) => {
  try {
    const result = {};
    UserModel.getSecurityQuestionsList((err, SecurityQuestions) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('getAllSecurityQuestionsList: ', SecurityQuestions);
        res.send(SecurityQuestions);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllSecurityQuestionsList of UserController: ', e);
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
        debug('getAllUbicationsList: ', getUbicationsListData);
        res.send(getUbicationsListData);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllUbicationsList of UserController: ', e);
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
        debug('getAllUserRoleList: ', getUserRoleListData);
        res.send(getUserRoleListData);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllUserRoleList of UserController: ', e);
    res.status(500).send(e);
  }
};

const addUser = (req, res) => {
  try {
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
            debug('addUser: ', userInsert);
            res.send(userInsert);
          }
        });
    }
  } catch (e) {
    debug('error catch in the funcion addUser of UserController: ', e);
    res.status(500).send(e);
  }
};

const addUserByAdmin = (req, res) => {
  try {
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
      UserModel.addNewUserByAdmin(name, surname, email, pass, ubicationId, roleUserID, userID,
        schoolID, instituteID, coordinationID, (err, userInsert) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('addUserByAdmin: ', userInsert);
            res.send(userInsert);
          }
        });
    }
  } catch (e) {
    debug('error catch in the funcion addUserByAdmin of UserController: ', e);
    res.status(500).send(e);
  }
};

const login = (req, res) => {
  try {
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
          debug('login: ', aunthenticate);
          res.send(aunthenticate);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion login of UserController: ', e);
    res.status(500).send(e);
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
        debug('getALLUserValidateList: ', UserValidateList);
        res.send(UserValidateList);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getALLUserValidateList of UserController: ', e);
    res.status(500).send(e);
  }
};

const updateUserValidate = (req, res) => {
  try {
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
  } catch (e) {
    debug('error catch in the funcion updateUserValidate of UserController: ', e);
    res.status(500).send(e);
  }
};

const getUser = (req, res) => {
  try {
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
  } catch (e) {
    debug('error catch in the funcion getUser of UserController: ', e);
    res.status(500).send(e);
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
        debug('getALLUserList: ', UserList);
        res.send(UserList);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getALLUserList of UserController: ', e);
    res.status(500).send(e);
  }
};

const updateUserAnswer = (req, res) => {
  try {
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
  } catch (e) {
    debug('error catch in the funcion updateUserAnswer of UserController: ', e);
    res.status(500).send(e);
  }
};

const updateUserPassword = (req, res) => {
  try {
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
  } catch (e) {
    debug('error catch in the funcion updateUserPassword of UserController: ', e);
    res.status(500).send(e);
  }
};

const getUserForChangePassword = (req, res) => {
  try {
    const result = {};
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 1) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const email = req.body.param_email;
      debug('req.body: ', req.body);
      UserModel.getUserForChangePassword(email, (err, user) => {
        if (err) {
          result.messageError = err;
          res.status(400).send(result);
        } else {
          debug('getUserForChangePassword: ', user);
          res.send(user);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getUserForChangePassword of UserController: ', e);
    res.status(500).send(e);
  }
};

module.exports = {
  getAllRolesList,
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
  getUserForChangePassword,
};
