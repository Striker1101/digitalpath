const { check } = require("express-validator");

exports.validateRegister = [
  check("name", "Name is required").not().isEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
];
