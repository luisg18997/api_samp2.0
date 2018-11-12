const appName = 'formDataController';
const debug = require('debug')(appName);

const formDataModel = require('../models/formDataModel.js');

const getAllMovementTypeslist = (req, res) => {
  try {
    const result = {};
    formDataModel.getMovementTypeslist((err, formData) => {
      if (err) {
        result.messageError = err;
        res.status(404).send(result);
      } else {
        debug('formDataController: ', formData);
        res.send(formData);
      }
    });
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

module.exports = {

  getAllMovementTypeslist,

};
