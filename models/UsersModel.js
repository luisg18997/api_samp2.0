const appName = 'UserModel';
const debug = require('debug')(appName);
const util = require('util');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const pool = require('./pgmodel.js');

const getRolesList  = (callback) => {
  const query = util.format('SELECT user_data.get_roles_list() as result;');
  const data = {};
  return pool.query(query, (err, res) => {
 if (!err) {
      debug('res.rows: ', res.rows[0].result.length);
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('result obtain rowCount: ', res.rowCount);
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

const getSecurityAnswerFilterQuestionList  = (callback) => {
  const query = util.format('SELECT user_data.get_security_answer_filter_question_list() as result;');
  const data = {};
  return pool.query(query, (err, res) => {
 if (!err) {
      debug('res.rows: ', res.rows[0].result.length);
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('result obtain rowCount: ', res.rowCount);
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

const getSecurityAnswerList  = (callback) => {
  const query = util.format('SELECT user_data.get_security_answer_list() as result;');
  const data = {};
  return pool.query(query, (err, res) => {
 if (!err) {
      debug('res.rows: ', res.rows[0].result.length);
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('result obtain rowCount: ', res.rowCount);
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

const getSecurityQuestionsList  = (callback) => {
  const query = util.format('SELECT user_data.get_security_questions_list() as result;');
  const data = {};
  return pool.query(query, (err, res) => {
 if (!err) {
      debug('res.rows: ', res.rows[0].result.length);
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('result obtain rowCount: ', res.rowCount);
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

const getUbicationsList  = (callback) => {
  const query = util.format('SELECT user_data.get_ubications_list() as result;');
  const data = {};
  return pool.query(query, (err, res) => {
 if (!err) {
      debug('res.rows: ', res.rows[0].result.length);
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('result obtain rowCount: ', res.rowCount);
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


const getUserRoleList  = (callback) => {
  const query = util.format('SELECT user_data.get_user_role_list() as result;');
  const data = {};
  return pool.query(query, (err, res) => {
 if (!err) {
    //  debug('res.rows: ', res.rows[0].result.length);
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('result obtain rowCount: ', res.rowCount);
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

const addNewUser  = (name, surname, email, pass, ubicationId, UbicationUserId, callback) => {
  const passwordCrypt = bcrypt.hashSync(pass, saltRounds);
  debug('passwordCrypt: ', passwordCrypt);
  const query = util.format("SELECT user_data.user_insert(param_name := '%s', param_surname := '%s', param_email := '%s', param_password := '%s', param_ubication_id := %d, param_ubication_user_id := 0) as result;",
    name, surname, email, passwordCrypt, ubicationId);
  const data = {};
  return pool.query(query, (err, res) => {
 if (!err) {
    debug('res.rows: ', res.rows[0].result.length);
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        debug('result obtain rowCount: ', res.rowCount);
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      debug('err: ', err)
      callback(err.stack, null);
    }
  });
};

const login = (email, password, callback) => {
  const query = util.format("SELECT user_data.login_user(param_email := '%s'); as result",
  email);
  const data = {};
  return pool.query(query, (err, res) => {
 if (!err) {
    debug('res.rows: ', res.rows[0].result.length);
      if ((res.rowCount !== 0) && (res.rows[0].result != null)) {
        const compare = bcrypt.compareSync(password, res.rows[0].result.password);
        debug('compare: ', compare);
        debug('result obtain rowCount: ', res.rowCount);
        callback(false, res.rows[0].result);
      } else {
        data.result = 'not found';
        callback(false, data);
      }
    } else {
      debug('err: ', err)
      callback(err.stack, null);
    }
  });
}


module.exports = {
getRolesList,
getSecurityAnswerFilterQuestionList,
getSecurityAnswerList,
getSecurityQuestionsList,
getUbicationsList,
getUserRoleList,
addNewUser,
login
};
