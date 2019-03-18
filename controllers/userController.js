const appName = 'UserController';
const debug = require('debug')(appName);

const UserModel = require('../models/UsersModel.js');

const getAllRolesList = (req, res) => {
  const result = {};
  try {
    UserModel.getRolesList((err, data) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('getAllRolesList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllRolesList of UserController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllSecurityQuestionsList = (req, res) => {
  const result = {};
  try {
    UserModel.getSecurityQuestionsList((err, data) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('getAllSecurityQuestionsList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllSecurityQuestionsList of UserController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllUbicationsList = (req, res) => {
  const result = {};
  try {
    UserModel.getUbicationsList((err, data) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('getAllUbicationsList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllUbicationsList of UserController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getAllUserRoleList = (req, res) => {
  const result = {};
  try {
    UserModel.getUserRoleList((err, data) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('getAllUserRoleList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getAllUserRoleList of UserController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const addUser = (req, res) => {
  const result = {};
  try {
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
        instituteID, coordinationID, (err, data) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('addUser: ', data);
            res.send(data);
          }
        });
    }
  } catch (e) {
    debug('error catch in the funcion addUser of UserController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const addUserByAdmin = (req, res) => {
  const result = {};
  try {
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
        schoolID, instituteID, coordinationID, (err, data) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('addUserByAdmin: ', data);
            res.send(data);
          }
        });
    }
  } catch (e) {
    debug('error catch in the funcion addUserByAdmin of UserController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const login = (req, res) => {
  const result = {};
  try {
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
      UserModel.login(email, pass, (err, data) => {
        if (err) {
          result.messageError = err;
          res.status(400).send(result);
        } else {
          debug('login: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion login of UserController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getALLUserValidateList = (req, res) => {
  const result = {};
  try {
    UserModel.getALLUserValidateList((err, data) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('getALLUserValidateList: ', data);
        res.send(data);
      }
    });
  } catch (e) {
    debug('error catch in the funcion getALLUserValidateList of UserController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const updateUserValidate = (req, res) => {
  const result = {};
  try {
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
        userId, (err, data) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('updateUserValidate: ', data);
            res.send(data);
          }
        });
    }
  } catch (e) {
    debug('error catch in the funcion updateUserValidate of UserController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getUser = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 1) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const userID = req.body.param_user_id;
      debug('req.body: ', req.body);
      UserModel.getUser(userID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.status(400).send(result);
        } else {
          debug('getUser: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getUser of UserController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getALLUserList = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 1) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const userID = req.body.param_user_id;
      debug('req.body: ', req.body);
      UserModel.getALLUserList(userID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.status(404).send(result);
        } else {
          debug('getALLUserList: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getALLUserList of UserController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const updateUserAnswer = (req, res) => {
  const result = {};
  try {
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
      UserModel.updateUserAnswer(answerID, userID, questionID, answer, (err, data) => {
        if (err) {
          result.messageError = err;
          res.status(400).send(result);
        } else {
          debug('updateUserAnswer: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion updateUserAnswer of UserController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const updateUserPassword = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 2) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const userID = req.body.param_id;
      const password = req.body.param_password;
      debug('req.body: ', req.body);
      UserModel.updateUserPassword(userID, password, (err, data) => {
        if (err) {
          result.messageError = err;
          res.status(400).send(result);
        } else {
          debug('updateUserPassword: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion updateUserPassword of UserController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getUserForChangePassword = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 1) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const email = req.body.param_email;
      debug('req.body: ', req.body);
      UserModel.getUserForChangePassword(email, (err, data) => {
        if (err) {
          result.messageError = err;
          res.status(400).send(result);
        } else {
          debug('getUserForChangePassword: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getUserForChangePassword of UserController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getUserSecurityAnswerCompare = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 2) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const userID = req.body.param_id;
      const answer = req.body.param_answer;
      debug('req.body: ', req.body);
      UserModel.getUserSecurityAnswerCompare(userID, answer, (err, data) => {
        if (err) {
          result.messageError = err;
          res.status(400).send(result);
        } else {
          debug('getUserSecurityAnswerCompare: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion getUserSecurityAnswerCompare of UserController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const updateUserIsRecovery = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 2) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const userID = req.body.param_id;
      const adminID = req.body.param_user_id;
      debug('req.body: ', req.body);
      UserModel.updateUserIsRecovery(userID, adminID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.status(400).send(result);
        } else {
          debug('updateUserIsRecovery: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion updateUserIsRecovery of UserController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const updateUserIsDeleted = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 2) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const userID = req.body.param_id;
      const adminID = req.body.param_user_id;
      debug('req.body: ', req.body);
      UserModel.updateUserIsDeleted(userID, adminID, (err, data) => {
        if (err) {
          result.messageError = err;
          res.status(400).send(result);
        } else {
          debug('updateUserIsDeleted: ', data);
          res.send(data);
        }
      });
    }
  } catch (e) {
    debug('error catch in the funcion updateUserIsDeleted of UserController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const updateUserAllData = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 10) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const userID = req.body.param_id;
      const name = req.body.param_name;
      const surname = req.body.param_surname;
      const email = req.body.param_email;
      const ubicationID = req.body.param_ubication_id;
      const schoolID = req.body.param_school_id;
      const instituteID = req.body.param_institute_id;
      const coordinationID = req.body.param_coordination_id;
      const isActive = req.body.param_is_active;
      const adminID = req.body.param_user_id;
      debug('req.body: ', req.body);
      UserModel.updateUserAllData(userID, name, surname, email, ubicationID, schoolID, instituteID,
        coordinationID, isActive, adminID, (err, data) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('updateUserAllData: ', data);
            res.send(data);
          }
        });
    }
  } catch (e) {
    debug('error catch in the funcion updateUserAllData of UserController: ', e);
    result.messageError = e;
    res.send(result);
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
  getUserSecurityAnswerCompare,
  updateUserIsDeleted,
  updateUserIsRecovery,
  updateUserAllData,
};
