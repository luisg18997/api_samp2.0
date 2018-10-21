const express = require('express');

const UserRouter = express.Router();

const UserController = require('../controllers/userController.js');

UserRouter.post('/Roles', UserController.getAllRolesList);

UserRouter.post('/SecurityAnswer/SecurityAnswerFilterQuestion', UserController.getAllSecurityAnswerFilterQuestionList);

UserRouter.post('/SecurityAnswer', UserController.getAllSecurityAnswerList);

UserRouter.post('/SecurityQuestions', UserController.getAllSecurityQuestionsList);

UserRouter.post('/Ubications', UserController.getAllUbicationsList);

UserRouter.post('/Roles/UserRole', UserController.getAllUserRoleList);

module.exports = UserRouter;
