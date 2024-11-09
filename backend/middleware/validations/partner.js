const { body } = require("express-validator");

const partnerValidationRules = [
  // Validate 'name' - required, non-empty, should be a string, max length 255
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be a string")
    .isLength({ max: 255 })
    .withMessage("Name must not exceed 255 characters"),

  // Validate 'position' - optional, should be a string, max length 255
  body("slogan")
    .optional()
    .isString()
    .withMessage("slogan must be a string")
    .isLength({ max: 255 })
    .withMessage("slogan must not exceed 255 characters"),
];

module.exports = partnerValidationRules;
