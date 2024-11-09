const { check } = require("express-validator");

// category validation rules
exports.CategoryValidationRules = [
  // name is required for both create and update
  check("name").notEmpty().withMessage("Name is required"),
  check("description").notEmpty().withMessage("Description is required"),
  check("icon").notEmpty().withMessage("Icon is required"),
];
