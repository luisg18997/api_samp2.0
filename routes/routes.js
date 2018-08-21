// librarys
const express = require('express');

const router = express.Router();

// controllers files
// const Usercontroller = require("../controllers/usercontroller.js");
// const Indexcontroller = require("../controllers/indexcontroller.js");


// routes
router.get('/', (req, res) => {
  res.send('Home page');
});

router.get('/admin', (req, res) => {
  res.send('admin page');
});


router.get('/school', (req, res) => {
  res.send('school page');
});


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
