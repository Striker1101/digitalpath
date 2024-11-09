const { check } = require("express-validator");

// Blog validation rules
exports.blogValidationRules = [
  // Validate and sanitize the title
  check("title")
    .isString()
    .withMessage("Title must be a string")
    .notEmpty()
    .withMessage("Title is required")
    .trim(),

  // Validate and sanitize the content
  check("content")
    .isString()
    .withMessage("Content must be a string")
    .notEmpty()
    .withMessage("Content is required")
    .trim(),

  // Validate and sanitize the content
  check("description")
    .isString()
    .withMessage("Description must be a string")
    .notEmpty()
    .withMessage("Description is required")
    .trim(),

  // Validate and sanitize the content
  check("quote")
    .isString()
    .withMessage("Quote must be a string")
    .notEmpty()
    .withMessage("Quote is required")
    .trim(),
];
