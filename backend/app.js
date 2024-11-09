var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const passport = require("passport");
const syncDatabase = require("./database/syncDatabase");
require("dotenv").config();

var app = express();

// Allow all origins
app.use(cors());
app.use(logger("dev"));

// Bodyparser Middleware
app.use(express.json());

// Passport Middleware
require("./config/passport")(passport);
app.use(passport.initialize());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use(cors({ origin: "http://localhost:3001" }));

// Synchronize the database when the app starts
syncDatabase();

// all routes
app.use("/auth", require("./routes/auth"));
app.use("/users", require("./routes/users"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500).json({
    error: err.message,
    status: err.status,
  });
});

module.exports = app;
