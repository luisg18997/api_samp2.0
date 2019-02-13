require('dotenv').config();

const appName = 'UserModel';
const debug = require('debug')(appName);
const util = require('util');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const saltRounds = 10;

const pool = require('./pgmodel.js');

const getRolesList = (callback) => {
  try {
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
  } catch (e) {
    debug('error catch in the funcion getRolesList of UserModel: ', e);
    return callback(e, null);
  }
};

const getSecurityQuestionsList = (callback) => {
  try {
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
  } catch (e) {
    debug('error catch in the funcion getSecurityQuestionsList of UserModel: ', e);
    return callback(e, null);
  }
};

const getUbicationsList = (callback) => {
  try {
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
  } catch (e) {
    debug('error catch in the funcion getUbicationsList of UserModel: ', e);
    return callback(e, null);
  }
};

const getUserRoleList = (callback) => {
  try {
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
  } catch (e) {
    debug('error catch in the funcion getUserRoleList of UserModel: ', e);
    return callback(e, null);
  }
};

const addNewUser = (name, surname, email, pass, ubicationId, schoolID, instituteID,
  coordinationID, callback) => {
  try {
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
  } catch (e) {
    debug('error catch in the funcion addNewUser of UserModel: ', e);
    return callback(e, null);
  }
};

const addNewUserByAdmin = (name, surname, email, pass, ubicationId, roleUserID, userID, schoolID,
  instituteID, coordinationID, callback) => {
  try {
    const passwordCrypt = bcrypt.hashSync(pass, saltRounds);
    debug('passwordCrypt: ', passwordCrypt);
    const query = util.format("SELECT user_data.user_insert_for_a_admin(param_name := '%s', param_surname := '%s', param_email := '%s', param_password := '%s', param_ubication_id := %d, param_role_user_id := %d, param_user_id := %d, param_school_id := %d, param_institute_id := %d, param_coordination_id := %d) as result;",
      name, surname, email, passwordCrypt, ubicationId, roleUserID, userID, schoolID, instituteID,
      coordinationID);
    const data = {};
    return pool.query(query, (err, res) => {
      if (!err) {
        if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
          debug('res.rows: ', res.rows[0].result);
          callback(false, res.rows[0].result);
        } else {
          data.result = 'not found';
          callback(false, data);
        }
      } else {
        callback(err.stack, null);
      }
    });
  } catch (e) {
    debug('error catch in the funcion addNewUserByAdmin of UserModel: ', e);
    return callback(e, null);
  }
};

const login = (email, password, callback) => {
  try {
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
            data.iat = moment().unix();
            data.exp = moment().add(1, 'hours').unix();
            debug('secrect: ', process.env.JWT_KEY);
            const token = jwt.sign(
              { data },
              process.env.JWT_KEY,
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
  } catch (e) {
    debug('error catch in the funcion addNewUserByAdmin of UserModel: ', e);
    return callback(e, null);
  }
};

const getALLUserValidateList = (callback) => {
  try {
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
  } catch (e) {
    debug('error catch in the funcion login of UserModel: ', e);
    return callback(e, null);
  }
};

const updateUserValidate = (userID, userRoleID, roleID, isActive, isDeleted, userId, callback) => {
  try {
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
  } catch (e) {
    debug('error catch in the funcion updateUserValidate of UserModel: ', e);
    return callback(e, null);
  }
};

const getUser = (userID, callback) => {
  try {
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
  } catch (e) {
    debug('error catch in the funcion getUser of UserModel: ', e);
    return callback(e, null);
  }
};


const getALLUserList = (callback) => {
  try {
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
  } catch (e) {
    debug('error catch in the funcion getALLUserList of UserModel: ', e);
    return callback(e, null);
  }
};

const updateUserAnswer = (answerID, userID, questionID, answer, callback) => {
  try {
    const answerCrypt = bcrypt.hashSync(answer, saltRounds);
    const query = util.format("SELECT user_data.security_answer_update_answer(param_id := %d, param_answer_user_id := %d, param_question_id := %d, param_answer := '%s', param_user_id := %d) as result",
      answerID, userID, questionID, answerCrypt, userID);
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
  } catch (e) {
    debug('error catch in the funcion updateUserAnswer of UserModel: ', e);
    return callback(e, null);
  }
};

const updateUserPassword = (userID, password, callback) => {
  try {
    const passwordCrypt = bcrypt.hashSync(password, saltRounds);
    const query = util.format("SELECT user_data.user_update_password(param_id := %d, param_password := '%s') as result;",
      userID, passwordCrypt);
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
  } catch (e) {
    debug('error catch in the funcion updateUserPassword of UserModel: ', e);
    return callback(e, null);
  }
};

const getUserForChangePassword = (email, callback) => {
  try {
    const query = util.format("SELECT user_data.get_user_for_change_password(param_email := '%s') as result;",
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
  } catch (e) {
    debug('error catch in the funcion getUserForChangePassword of UserModel: ', e);
    return callback(e, null);
  }
};

module.exports = {
  getRolesList,
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
