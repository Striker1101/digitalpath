const { check } = require("express-validator");

// category validation rules
exports.TagValidationRules = [
  // name is required for both create and update
  check("name").notEmpty().withMessage("name is required"),
];
