const { check } = require("express-validator");

exports.projectValidationRules = [
  check("title")
    .notEmpty()
    .withMessage("Title is required.")
    .isString()
    .withMessage("Title must be a string."),
  check("description")
    .optional()
    .isString()
    .withMessage("Description must be a string."),
  check("content")
    .optional()
    .isString()
    .withMessage("Content must be a string."),
  check("start_date")
    .optional()
    .isISO8601()
    .toDate()
    .withMessage("Start date must be a valid date."),
  check("end_date")
    .optional()
    .isISO8601()
    .toDate()
    .withMessage("End date must be a valid date."),
  check("client")
    .optional()
    .isString()
    .withMessage("Client name must be a string."),
  check("director")
    .optional()
    .isString()
    .withMessage("Director name must be a string."),
  check("location_id").optional(),
  check("budget")
    .optional()
    .isDecimal()
    .withMessage("Budget must be a decimal value."),
];
