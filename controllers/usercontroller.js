const appName = 'UserController';
const debug = require('debug')(appName);

const UserModel = require('../models/usermodel.js');

const getAllSchoolList = (req, res) => {
  try {
    const facutly = 1;
    UserModel.schools(facutly, (schoolData) =>{
      debug('UserController: ', schoolData);
      res.send(schoolData);
    });

    /*		res.status(400).send({
			"message": "bad request"
		});
		res.status(404).send({
			"message": "horror not found"
		});
		res.status(500).send({
			"message": "internal server error"
		}); */
  } catch (e) {
    debug('error: ', e);
  }
};

module.exports = {
  getAllSchoolList,
};
