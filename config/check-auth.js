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
  try {
    const checkToken = req.body.token;
    const data = jwt.verify(checkToken, process.env.JWT_KEY);
    const result = {};
    if (data.exp <= moment().unix()) {
      result.exp = true;
      res.status('401').send(result);
    } else {
      result.exp = false;
      res.send(result);
    }
  } catch (e) {
    debug('error catch in the function checkIsTokenExpired: ', e);
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
