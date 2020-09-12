var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var login = require("./api/login");
var info = require("./api/Info");

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
    message:"",
    resCode:0
  });
})
app.post("/getLogin",function(req,res){
  login.checkLogin(req.body,res);
})


app.options("/news/addFirstCategory",function(req,res){
  res.send({
    result:true,
    message:"",
    resCode:0
  });
})
app.post("/news/addFirstCategory",function(req,res){
  let data = {
    txt:req.body.categoryName,
    userId:req.headers.userid
  }
  info.addFirstCategory(data,res);
})


app.options("/news/getCategory",function(req,res){
  res.send({
    result:true,
    message:"",
    resCode:0
  });
})
app.post("/news/getCategory",function(req,res){
  info.getCategory(req.headers.userid,res);
})

app.options("/news/reviseCategory",function(req,res){
  res.send({
    result:true,
    message:"",
    resCode:0
  });
})
app.post("/news/reviseCategory",function(req,res){
  info.reviseCategory(req.body,res);
})

app.options("/news/removeCategory",function(req,res){
  res.send({
    result:true,
    message:"",
    resCode:0
  });
})
app.post("/news/removeCategory",function(req,res){
  info.removeCategory(req.body.id,res);
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
