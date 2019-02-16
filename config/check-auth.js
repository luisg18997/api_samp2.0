const appName = 'checkAuth';
const jwt = require('jsonwebtoken');
const moment = require('moment');
const debug = require('debug')(appName);

const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        res.status(401).send('Usuario no auntenticado');
      } else {
        req.userData = decoded;
      }
    });
    next();
  } catch (err) {
    res.status(401).send('Usuario no auntenticado');
  }
};

const checkIsTokenExpired = (req, res) => {
  const result = {};
  try {
    const checkToken = req.body.token;
    const data = jwt.verify(checkToken, process.env.JWT_KEY);
    debug('data: ', data);
    debug('moment().unix(): ', moment().unix());
    debug('data.exp: ', data.exp);
    debug('data.iat: ', data.iat);
    if (data !== undefined) {
      if (data.exp <= moment().unix()) {
        result.exp = true;
        debug('session expirada');
        res.send(result);
      } else {
        result.exp = false;
        debug('session NO expirada');
        res.send(result);
      }
    } else {
      debug('data.exp es undefined');
      result.exp = true;
      res.send(result);
    }
  } catch (e) {
    result.exp = true;
    debug('error catch in the function checkIsTokenExpired: ', e);
    res.send(result);
  }
};

const ObtainData = (req, res) => {
  try {
    const checkToken = req.body.token;
    const data = jwt.verify(checkToken, process.env.JWT_KEY);
    res.send(data);
  } catch (e) {
    debug('error catch in the function ObtainData: ', e);
  }
};

module.exports = {
  checkAuth,
  checkIsTokenExpired,
  ObtainData,
};
