const express = require('express'),
  path = require('path'),
  assert = require('assert'),
  db = require('./dbUtils/dbUtils.js'),
  bodyParser = require('body-parser'),
  conConfig = require('./conConfig/conConfig.js'),
  mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const app = express();

db.setUpConnection();

app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../public'), {
  dotfiles: 'ignore',
  index: false
}));

/*** To fill db or clear db ***/
// db.populateDB();
// db.killPopulationOfDB();


// TODO: Роутинг до конкретного пользователя "проваливается" в default, т.к. case с :userId не
// работает, это просто строка без params. Отлову params с меткой getuser мешает запрос
// на favicon. Есть ли путь отлавливать getuser, можно ли осуществлять навигацию средствами
// react-router?
// TODO: Answer: Переписан switch, сравнение происходит с true, indexof, возвращающий -1 работает
// с ~, ~indexof('несущ. подстрока') вернет 0, под каждый тип запроса в адрес запроса
// пишется метка, после к-ой могут идти аргументы (без ?, !, #, $ и т.д.)
// запросы для favicon (к-ые генерируются во всех местах) обрабатываются в default,
// без перехвата до default
app.get('*', function(req, res, next) {

  switch (true) {
    case !!(~req.originalUrl.indexOf('getusers')):
      console.log('in 1 case');
      console.log('indexof: ' + (req.originalUrl.indexOf('getusers')));
      console.log('Request: [GET]', req.originalUrl);
      // console.log(typeof req.originalUrl == 'string');  // true
      db.getUsers().then((data) => {
        res.send(data);
      });
    break;

    case !!(~req.originalUrl.indexOf('getuser') && !(~req.originalUrl.indexOf('favicon'))): {
      var userId = req.originalUrl.slice(req.originalUrl.indexOf('getuser') + 7);
      console.log('in 2 case');
      console.log('userId is: ' + userId + ' indexof: ' + req.originalUrl.indexOf('getuser'));
      console.log('Request: [GET]', req.originalUrl);
      db.getUser(userId).then((data) => {
        res.send(data);
      });
    }
    break;

    default:
      console.log('default Watch here!! Request: [GET]', req.originalUrl);
      res.sendFile(path.resolve(__dirname, '../public/index.html'));
  }
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
