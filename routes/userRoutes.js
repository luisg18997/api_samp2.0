const express = require('express');

const UserRouter = express.Router();

const UserController = require('../controllers/userController.js');

UserRouter.get('/Roles', UserController.getAllRolesList);

UserRouter.get('/Validates', UserController.getALLUserValidateList);

UserRouter.get('/SecurityQuestions', UserController.getAllSecurityQuestionsList);

UserRouter.get('/Ubications', UserController.getAllUbicationsList);

UserRouter.get('/Roles/UserRole', UserController.getAllUserRoleList);

UserRouter.post('/NewUser', UserController.addUser);

UserRouter.post('/NewUserByAdmin', UserController.addUserByAdmin);

UserRouter.post('/Login', UserController.login);

UserRouter.post('/Validate/update', UserController.updateUserValidate);

UserRouter.post('/', UserController.getUser);

UserRouter.post('/update', UserController.updateUserAllData);

UserRouter.post('/Deleted/update', UserController.updateUserIsDeleted);

UserRouter.post('/Recovery/update', UserController.updateUserIsRecovery);

UserRouter.post('/getChangePassword', UserController.getUserForChangePassword);

UserRouter.post('/List', UserController.getALLUserList);

UserRouter.post('/SecurityAnswer/update', UserController.updateUserAnswer);

UserRouter.post('/SecurityAnswer/compare', UserController.getUserSecurityAnswerCompare);

UserRouter.post('/Password/update', UserController.updateUserPassword);

module.exports = UserRouter;
