// Routers files
const FacultyRouter = require('./facultyRoutes');
const formRouter = require('./formRoute');
const EmployeeRouter = require('./employeeRoutes');
const UsersRouter = require('./userRoutes');
const ProcessRouter = require('./processRoutes');
const checkToken = require('../config/check-auth');


module.exports = (router) => {
  // routes
  router.get('/', (req, res) => {
    res.send('Home page');
  });

  router.use('/faculty', FacultyRouter);

  router.use('/form', formRouter);

  router.use('/employee', EmployeeRouter);

  router.use('/users', UsersRouter);

  router.use('/process', ProcessRouter);

  router.get('*', (req, res) => {
    res.status(404).send('invalided page');
  });

  router.post('/checkIsTokenExpired', checkToken.checkIsTokenExpired);

  router.post('/ObtainData', checkToken.ObtainData);

  router.post('*', (req, res) => {
    res.status(404).send('invalided page');
  });
};
