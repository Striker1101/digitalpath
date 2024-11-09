const { body } = require("express-validator");

const testimonyValidationRules = [
  // Validate 'comment' - required, non-empty, should be a string
  body("comment")
    .notEmpty()
    .withMessage("Comment is required")
    .isString()
    .withMessage("Comment must be a valid text"),

  // Validate 'name' - required, non-empty, should be a string, max length 255
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be a string")
    .isLength({ max: 255 })
    .withMessage("Name must not exceed 255 characters"),

  // Validate 'position' - optional, should be a string, max length 255
  body("position")
    .optional()
    .isString()
    .withMessage("Position must be a string")
    .isLength({ max: 255 })
    .withMessage("Position must not exceed 255 characters"),
];

module.exports = testimonyValidationRules;
