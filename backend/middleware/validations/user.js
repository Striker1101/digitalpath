const { body } = require("express-validator");

const UserValidationRules = [
  // Validation middleware
  body("name").optional().isString().withMessage("Name must be a string."),
  body("role")
    .optional()
    .isIn(["admin", "user"])
    .withMessage("Role must be either admin or user."),
  body("country").notEmpty().withMessage("Country is required."),
  body("state").optional().isString().withMessage("State must be a string."),
  body("city").optional().isString().withMessage("City must be a string."),
  body("address")
    .optional()
    .isString()
    .withMessage("Address must be a string."),
];

module.exports = UserValidationRules;
