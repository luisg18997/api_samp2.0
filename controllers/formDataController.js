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

const getAllMovementTypeslist = (req, res) => {
  try {
    if (Object.keys(req.body).length !== 3) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else {
      const facultyID = req.body.param_faculty_id;
      const facultyCode = req.body.param_faculty_code;
      const facultyName = req.body.param_faculty_name;
      const userID = req.body.param_user_id;
      const facultyIsActive = req.body.param_faculty_is_active;
      const facultyIsDeleted = req.body.param_faculty_is_deleted;

      formDataModel.addNewFormOfice(facultyID, facultyCode, facultyName, userID,
        facultyIsActive, facultyIsDeleted, (err, facultyUpdate) => {
          if (err) {
            result.messageError = err;
            res.status(404).send(result);
          } else {
            debug('FacultyController: ', facultyUpdate);
            res.send(facultyUpdate);
          }
        });
    }
  } catch (e) {
    debug('error: ', e);
    res.status(500).send(e);
  }
};

module.exports = {

  getAllMovementTypeslist,

};
