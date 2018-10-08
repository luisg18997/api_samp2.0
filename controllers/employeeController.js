const appName = 'EmployeeController';
const debug = require('debug')(appName);

const EmployeeModel = require('../models/employeeModel.js');

const getAllStatesList = ((req, res) => {
	try{
		EmployeeModel.getStatesList((stateData) => {
			debug('EmployeeController: ', stateData);
      		res.send(stateData);
		});
	}catch (e) {

	}
});

module.exports = {
	getAllStatesList,
}