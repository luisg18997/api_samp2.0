const appName = 'UcvSist';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const debug = require('debug')(appName);

const app = express();
const port = process.env.PORT || 5000;

const routes = require('./routes/routes');

// settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// midlewares
app.use((req, res, next) => {
  debug('URL: ', req.url, '-', req.method);
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
routes(app);

// start the server
app.listen(port, () => {
  debug('server on port :', port);
});
