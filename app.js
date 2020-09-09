var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var login = require("./api/login");
var tokent = require("./tool/tokenTool")

var app = express();

app.all("*",function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "*");


  req.header("Access-Control-Allow-Origin", "*");
  req.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  req.header("Access-Control-Allow-Headers", "*");

  next();
});
//解决通信跨域问题，use是express注册中间件的方法

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.options('/getSms',function(req,res){
  
  res.send({
    result:true,
    message:""
  });
})
app.post('/getSms',async function(req,res){
  let data = req.body;
  await login.checkUserRepeat(data,res)
})

app.options('/register',function(req,res){
  
  res.send({
    result:true,
    message:""
  });
})
app.post('/register',function(req,res){
  
  let result = login.register(req.body);

  res.send(result);
})

app.options("/getLogin",function(req,res){
  res.send({
    result:true,
    message:""
  });
})
app.post("/getLogin",function(req,res){
  login.checkLogin(req.body,res);
})



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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




module.exports = app
