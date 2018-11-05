// Routers files
const FacultyRouter = require('./facultyRoutes');
const formDataRouter = require('./formDataRoute');
const EmployeeRouter = require('./employeeRoutes');
const UsersRouter = require('./userRoutes');
const ProcessRouter = require('./processRoutes')


module.exports = (router) => {
  router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });


  // routes
  router.get('/', (req, res) => {
    res.send('Home page');
  });

  router.use('/faculty', FacultyRouter);

  router.use('/formData', formDataRouter);

  router.use('/employee', EmployeeRouter);

  router.use('/users',UsersRouter);

  router.use('/process', ProcessRouter);

  router.get('*', (req, res) => {
    res.status(404).send('invalided page');
  });

  router.post('*', (req, res) => {
    res.status(404).send('invalided page');
  });
};
