const jwt = require('jsonwebtoken');

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

module.exports = checkAuth;
