// validators/authValidator.js

const { check } = require("express-validator");

const loginValidationRules = [
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password is required").exists(),
];

module.exports = {
  loginValidationRules,
};
