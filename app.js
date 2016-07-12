var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
// require('body-parser-xml')(bodyParser);
var swig = require('swig');
var wechatMsg = require('wechat')
var config = require('./config')
var wxMsg = require('./bizs/wxMsg')
var wxMenus = require('./bizs/wxMenus')

// 数据库连接


global.db = mongoose.createConnection(config.db_uri)
/**
* 路由
*/
var routes = require('./routes/index');
var users = require('./routes/users');
var wechat = require('./routes/wechat')

var app = express();

// view engine setup
app.engine('html.swig', swig.renderFile);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html.swig');

swig.setDefaults({cache: false});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.query())


//解析xml
// app.use(bodyParser.xml({
//   limit: '1MB',
//   xmlParseOptions: {
//     normalize: true,
//     normalizeTags: true,
//     explicitArray: false
//   }
// }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/wechat', wechat);
app.use('/wechat', wechatMsg({
	token: config.token,
	appid: config.appId,
	encodingAESKey: config.encodingAESKey
}, wxMsg.handleMsg))

// 主动调用微信相关接口
wxMenus.createMenu()

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
