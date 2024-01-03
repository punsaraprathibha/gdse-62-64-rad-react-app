var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var contactRouter = require('./routes/contact');

var app = express(); // Creates an Express App

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middlewares
app.use(logger('dev'));
// Converts Request body data to JSON format
app.use(express.json());
// When we pass form data as URL encoded it is also converted to JSON format
app.use(express.urlencoded({ extended: false }));
// req.cookies
app.use(cookieParser());
// static path define
app.use(express.static(path.join(__dirname, 'public')));


// Enable CORS for all routes
app.use(cors());
// // Handle preflight requests
// app.options('*', cors())

// Path of the Route
app.use('/', indexRouter); // http://localhost:4000/ <= Base URL
app.use('/products', productsRouter); // http://localhost:4000/products
app.use('/contact', contactRouter); // http://localhost:4000/contact

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

module.exports = app;
