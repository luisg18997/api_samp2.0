// controllers files
const Usercontroller = require('../controllers/facultyController.js');
// const Indexcontroller = require("../controllers/indexcontroller.js");


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

  router.get('/admin', (req, res) => {
    res.send('admin page');
  });


  router.get('/schoolList', Usercontroller.getAllSchoolList);

  router.get('/instituteList', Usercontroller.getAllInstituteList);

  router.get('/coordinationList', Usercontroller.getAllCoordinationList);


  router.get('/rrhh', (req, res) => {
    res.send('RRHH page');
  });


  router.get('/presupuesto', (req, res) => {
    res.send('presupuesto page');
  });

  router.get('*', (req, res) => {
    res.send('invalided page');
  });
}
