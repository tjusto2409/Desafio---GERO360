const express = require('express'),
    app = express(),
    router = express.Router(),
    routesModule = require('../app/routes/routesModule'),
    bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

routesModule(app, router);

module.exports = app;