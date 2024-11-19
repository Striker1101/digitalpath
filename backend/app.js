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

// Define allowed origins for CORS
const allowedOrigins = [
  "https://digitalpath.com.ng",
  "https://backend.digitalpath.com.ng",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.options("*", cors());

app.use(logger("dev"));

// Bodyparser Middleware
app.use(express.json());

// Passport Middleware
require("./config/passport")(passport);
app.use(passport.initialize());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Synchronize the database when the app starts
syncDatabase();

// All routes
app.use("/auth", require("./routes/auth"));
app.use("/users", require("./routes/users"));

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500).json({
    error: err.message,
    status: err.status,
  });
});

module.exports = app;
