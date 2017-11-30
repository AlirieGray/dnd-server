//**** dependencies ****//
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// allow CORS
const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

//**** middleware ****//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//*** controllers ***//
const monsterController = require('./controllers/monsters')(app);
const itemController = require('./controllers/items')(app);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function(req, res) {
  console.log('listening');
});
