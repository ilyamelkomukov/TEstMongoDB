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


// Can be replaced with nodemon
app.use(express.static(path.resolve(__dirname, '../public'), {
  dotfiles: 'ignore',
  index: false
}));

/*** To fill db or clear db ***/
// db.populateDB();
// db.killPopulationOfDB();
/******************************/


// TODO: Роутинг до конкретного пользователя "проваливается" в default, т.к. case с :userId не
// работает, это просто строка без params. Отлову params с меткой getuser мешает запрос
// на favicon. Есть ли путь отлавливать getuser, можно ли осуществлять навигацию средствами
// react-router?
// TODO: Answer: Переписан switch, сравнение происходит с true, indexof, возвращающий -1 работает
// с ~, ~indexof('несущ. подстрока') вернет 0, под каждый тип запроса в адрес запроса
// пишется метка, после к-ой могут идти аргументы (без ?, !, #, $ и т.д.)
// запросы для favicon (к-ые генерируются во всех местах) обрабатываются в default,
// без перехвата до default
// TODO: Improved answer: swutch переписан для string.match и регулярок, id юзера
// сохраняется в скобочной группе. Когда нет скобочных групп выражение foundSomething[0]
// ломает сервак, но св-во index есть. Switch производит строгое сравнение, поэтому
// у case нужны !! для перевода в bool
app.get('*', function(req, res, next) {

  var RegExpForGetUsers = /getusers/i,
    RegExpForGetUser = /getuser(\d)+/i,
    RegExpForFavicon = /favicon/i;

  switch (true) {
    case !!(req.originalUrl.match(RegExpForGetUsers)):
      console.log('in 1 case');
      console.log('indexof: ' + (req.originalUrl.match(RegExpForGetUsers).index));
      console.log('Request: [GET]', req.originalUrl);
      // console.log(typeof req.originalUrl == 'string');  // true
      db.getUsers().then((data) => {
        res.send(data);
      });
    break;

    case !!(req.originalUrl.match(RegExpForGetUser) && !(req.originalUrl.match(RegExpForFavicon))):
      var foundForUserId = req.originalUrl.match(RegExpForGetUser),
        userId = foundForUserId[1];
      console.log('in 2 case');
      console.log('userId is: ' + userId + ' indexof: ' + foundForUserId.index);
      console.log('Request: [GET]', req.originalUrl);
      db.getUser(userId).then((data) => {
        res.send(data);
      });
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
