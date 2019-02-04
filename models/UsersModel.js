require('dotenv').config();

const appName = 'UserModel';
const debug = require('debug')(appName);
const util = require('util');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

const pool = require('./pgmodel.js');

const getRolesList = (callback) => {
  const query = util.format('SELECT user_data.get_roles_list() as result;');
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const getSecurityAnswerFilterQuestionList = (callback) => {
  const query = util.format('SELECT user_data.get_security_answer_filter_question_list() as result;');
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const getSecurityAnswerList = (callback) => {
  const query = util.format('SELECT user_data.get_security_answer_list() as result;');
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const getSecurityQuestionsList = (callback) => {
  const query = util.format('SELECT user_data.get_security_questions_list() as result;');
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const getUbicationsList = (callback) => {
  const query = util.format('SELECT user_data.get_ubications_list() as result;');
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};


const getUserRoleList = (callback) => {
  const query = util.format('SELECT user_data.get_user_role_list() as result;');
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const addNewUser = (name, surname, email, pass, ubicationId, schoolID, instituteID,
  coordinationID, callback) => {
  const passwordCrypt = bcrypt.hashSync(pass, saltRounds);
  debug('passwordCrypt: ', passwordCrypt);
  const query = util.format("SELECT user_data.user_insert(param_name := '%s', param_surname := '%s', param_email := '%s', param_password := '%s', param_ubication_id := %d, param_school_id := %d, param_institute_id :=%d, param_coordination_id := %d) as result;",
    name, surname, email, passwordCrypt, ubicationId, schoolID, instituteID, coordinationID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const addNewUserByAdmin = (name, surname, email, pass, ubicationId, roleUserID, userID, schoolID,
  instituteID, coordinationID, callback) => {
  const passwordCrypt = bcrypt.hashSync(pass, saltRounds);
  debug('passwordCrypt: ', passwordCrypt);
  const query = util.format("SELECT user_data.user_insert_for_a_admin(param_name := '%s', param_surname := '%s', param_email := '%s', param_password := '%s', param_ubication_id := %d, param_role_user_id := %d, param_user_id := %d, param_school_id := %d, param_institute_id :=%d, param_coordination_id := %d) as result;",
    name, surname, email, passwordCrypt, ubicationId, roleUserID, userID, schoolID, instituteID,
    coordinationID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const login = (email, password, callback) => {
  const query = util.format("SELECT user_data.login_user(param_email := '%s') as result;",
    email);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
        debug(res.rows[0].result);
        const passHash = res.rows[0].result.password;
        const compare = bcrypt.compareSync(password, passHash);
        if (compare) {
          debug('result obtain rowCount: ', res.rowCount);
          data.id = res.rows[0].result.id;
          data.name = res.rows[0].result.name;
          data.email = res.rows[0].result.email;
          data.ubicationId = res.rows[0].result.ubication_id;
          data.ubication = res.rows[0].result.ubication;
          data.isActive = res.rows[0].result.is_active;
          data.isDeleted = res.rows[0].result.is_deleted;
          if (res.rows[0].result.role_id === null) {
            data.rolId = 0;
          } else {
            data.rolId = res.rows[0].result.role_id;
          }
          data.rol = res.rows[0].result.rol;
          if (res.rows[0].result.school_id === null) {
            data.schoolID = 0;
          } else {
            data.schoolID = res.rows[0].result.school_id;
          }
          if (res.rows[0].result.institute_id === null) {
            data.instituteID = 0;
          } else {
            data.instituteID = res.rows[0].result.institute_id;
          }
          if (res.rows[0].result.coordination_id === null) {
            data.coordinationID = 0;
          } else {
            data.coordinationID = res.rows[0].result.coordination_id;
          }
          if (res.rows[0].result.question_id === null) {
            data.questionID = 0;
          } else {
            data.questionID = res.rows[0].result.question_id;
          }
          data.question = res.rows[0].result.question;
          data.answer = res.rows[0].result.answer;
          data.ubicationUser = res.rows[0].result.ubication_user;
          debug('secrect: ', process.env.JWT_KEY);
          const token = jwt.sign(
            {
              data,
            },
            process.env.JWT_KEY,
            {
              expiresIn: '1h',
            },
          );
          const result = {
            token,
            data,
          };
          callback(false, result);
        } else {
          data.claveInv = 'Clave Invalida intente Nuevamente';
          callback(false, data);
        }
      } else {
        data.emailNotExist = 'Este email no esta registrado en el sistema';
        callback(false, data);
      }
    } else {
      debug('err: ', err);
      callback(err.stack, null);
    }
  });
};

const getALLUserValidateList = (callback) => {
  const query = util.format('SELECT user_data.get_user_validate_list() as result');
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const updateUserValidate = (userID, userRoleID, roleID, isActive, isDeleted, userId, callback) => {
  const query = util.format("SELECT user_data.user_update_by_validate(param_id := %d, param_role_user_id := %d, param_role_id :=%d, param_is_active := '%d', param_is_deleted := '%d', param_user_id := %d) as result",
    userID, userRoleID, roleID, isActive, isDeleted, userId);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const getUser = (userID, callback) => {
  const query = util.format('SELECT user_data.get_user(param_id := %d) as result',
    userID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};


const getALLUserList = (callback) => {
  const query = util.format('SELECT user_data.get_user_list() as result');
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const updateUserAnswer = (answerID, userID, questionID, answer, callback) => {
  const query = util.format("SELECT user_data.security_answer_update_answer(param_id := %d, param_answer_user_id := %d, param_question_id := %d, param_answer := '%s', param_user_id := %d) as result",
    answerID, userID, questionID, answer, userID);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const updateUserPassword = (userID, password, callback) => {
  const query = util.format("SELECT user_data.user_update_password(param_id := %d, param_password := '%s') as result;",
    userID, password);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

const getUserForChangePassword = (email, callback) => {
  const query = util.format("SELECT user_data.get_user_for_change_password(param_email := '%s') as result",
    email);
  const data = {};
  return pool.query(query, (err, res) => {
    if (!err) {
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('res.rows: ', res.rows[0].result.length);
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      callback(err.stack, null);
    }
  });
};

module.exports = {
  getRolesList,
  getSecurityAnswerFilterQuestionList,
  getSecurityAnswerList,
  getSecurityQuestionsList,
  getUbicationsList,
  getUserRoleList,
  addNewUser,
  login,
  addNewUserByAdmin,
  getALLUserValidateList,
  updateUserValidate,
  getUser,
  getALLUserList,
  updateUserPassword,
  updateUserAnswer,
  getUserForChangePassword,
};
