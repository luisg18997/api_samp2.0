// Routers files
const FacultyRouter = require('./facultyRoutes');
const EmployeeRouter = require('./employeeRoutes');


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

  router.use('/employee', EmployeeRouter);

  router.get('/admin', (req, res) => {
    res.send('admin page');
  });

  router.get('/rrhh', (req, res) => {
    res.send('RRHH page');
  });


  router.get('/presupuesto', (req, res) => {
    res.send('presupuesto page');
  });

  router.get('*', (req, res) => {
    res.status(404).send('invalided page');
  });
};
