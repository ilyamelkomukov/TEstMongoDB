const express = require('express'),
  path = require('path'),
  assert = require('assert'),
  db = require('./dbUtils/dbUtils.js'),
  bodyParser = require('body-parser'),
  conConfig = require('./conConfig/conConfig.js'),
  mongoose = require('mongoose');

const app = express();

db.setUpConnection();

app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../public'), {
  dotfiles: 'ignore',
  index: false
}));

app.get('*', function(req, res, next) {
  console.log('Request: [GET]', req.originalUrl);
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.get('/' + conConfig.name, (req, res) => {
  db.listUsers().then(data => {
    res.send(data);
  });
});

/**
 * Error Handling
 */

app.use(function(req, res, next) {
 console.log('404');
 let err = new Error('Not Found');
 err.status = 404;
 next(err);
});

app.use(function(err, req, res, next) {
 res.sendStatus(err.status || 500);
});

/**
* Start Server
*/

app.listen(3000, function() {
 console.log('up and running on port 3000');
});
