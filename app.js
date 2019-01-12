require('dotenv').config();

const appName = 'UcvSist';
const app = require('express')();
const bodyParser = require('body-parser');
const debug = require('debug')(appName);

const port = process.env.UCV_FHE_SIST_PORT || process.env.SRVC_UCV_FHE_SIST_PORT;

const routes = require('./routes/routes');

// midlewares
app.use((req, res, next) => {
  debug('App is in use, got called with this URL: ', req.url, ' and request method', req.method);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Request-Method', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


try {
  // routes
  routes(app);
} catch (e) {
  debug('error in the routes: ', e);
}

// start the server
app.listen(port, () => {
  debug('server on port :', port);
});
