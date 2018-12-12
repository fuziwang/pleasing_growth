var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var welcome = require('./routes/welcome');
var article = require('./routes/article');
var usersadd = require('./routes/usersadd');
var articleadd = require('./routes/articleadd');
var say = require('./routes/say');
var sayadd = require('./routes/sayadd');
var saycomment = require('./routes/saycomment');
var saycommentadd = require('./routes/saycommentadd');
var articlecomment = require('./routes/articlecomment');
var articlecommentadd = require('./routes/articlecommentadd');
var back = require('./routes/back');
var backadd = require('./routes/backadd');
var photos = require('./routes/photos');
var photosadd = require('./routes/photosadd');
var photo = require('./routes/photo');
var photoadd = require('./routes/photoadd');
var video = require('./routes/video');
var videoadd = require('./routes/videoadd');
var tree = require('./routes/tree');
var treeadd = require('./routes/treeadd');
var fruit = require('./routes/fruit');
var fruitadd = require('./routes/fruitadd');
var apiarticle = require('./routes/api/article');
var apiuser = require('./routes/api/user');
var apiback = require('./routes/api/back');
var apisay = require('./routes/api/say');
var apiphotos=require('./routes/api/photos');
var apiphoto=require('./routes/api/photo');
var apivideo=require('./routes/api/video');
var apiarticlecomment=require('./routes/api/articlecomment.js');
var apisaycomment=require('./routes/api/saycomment.js');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/usersadd',usersadd);
app.use('/welcome', welcome);
app.use('/article',article);
app.use('/articleadd',articleadd);
app.use('/say',say);
app.use('/sayadd',sayadd);
app.use('/saycomment',saycomment);
app.use('/saycommentadd',saycommentadd);
app.use('/articlecomment',articlecomment);
app.use('/articlecommentadd',articlecommentadd);
app.use('/back',back);
app.use('/backadd',backadd);
app.use('/photos',photos);
app.use('/photosadd',photosadd);
app.use('/photo',photo);
app.use('/photoadd',photoadd);
app.use('/video',video);
app.use('/videoadd',videoadd);
app.use('/tree',tree);
app.use('/treeadd',treeadd);
app.use('/fruit',fruit);
app.use('/fruitadd',fruitadd);
app.use('/api/article',apiarticle);
app.use('/api/user',apiuser);
app.use('/api/back',apiback);
app.use('/api/say',apisay);
app.use('/api/articlecomment',apiarticlecomment);
app.use('/api/saycomment',apisaycomment);
app.use('/api/photos',apiphotos);
app.use('/api/photo',apiphoto);
app.use('/api/video',apivideo);
app.use(express.static('./public/static'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(8080);
module.exports = app;
