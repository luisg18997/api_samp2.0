// librarys
const express = require('express');

const router = express.Router();

// controllers files
const Usercontroller = require('../controllers/usercontroller.js');
// const Indexcontroller = require("../controllers/indexcontroller.js");

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


router.get('/school', Usercontroller.getAllSchoolList);


router.get('/rrhh', (req, res) => {
  res.send('RRHH page');
});


router.get('/presupuesto', (req, res) => {
  res.send('presupuesto page');
});

router.get('*', (req, res) => {
  res.send('invalided page');
});

module.exports = router;
