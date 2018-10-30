const express = require('express');

const UserRouter = express.Router();

const UserController = require('../controllers/userController.js');

UserRouter.get('/Roles', UserController.getAllRolesList);

UserRouter.get('/SecurityAnswer/SecurityAnswerFilterQuestion', UserController.getAllSecurityAnswerFilterQuestionList);

UserRouter.get('/SecurityAnswer', UserController.getAllSecurityAnswerList);

UserRouter.get('/SecurityQuestions', UserController.getAllSecurityQuestionsList);

UserRouter.get('/Ubications', UserController.getAllUbicationsList);

UserRouter.get('/Roles/UserRole', UserController.getAllUserRoleList);

UserRouter.post('/NewUser', UserController.addUser);

module.exports = UserRouter;
