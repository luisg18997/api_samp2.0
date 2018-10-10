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
		debug('error: ', e);
	}
});

const getAllMunicipalitiesList = ((req, res) => {
	try{
		EmployeeModel.getMunicipalitiesList(req.body.stateID, (municipalityData) => {
			debug('EmployeeController: ', municipalityData);
      		res.send(municipalityData);
		});
	}catch (e) {
		debug('error: ', e);
	}
});

const getAllParishList = ((req, res) => {
	try{
		EmployeeModel.getParishList(req.body.municipalityID, (parishData) => {
			debug('EmployeeController: ', parishData);
      		res.send(parishData);
		});
	}catch (e) {
		debug('error: ', e);
	}
});

module.exports = {
	getAllStatesList,
	getAllMunicipalitiesList,
	getAllParishList,
}