const { body } = require("express-validator");

// Validation rules for saving a comment
const validateComment = [
  body("content")
    .isString()
    .notEmpty()
    .withMessage("Content must not be empty."),
  body("author").isString().notEmpty().withMessage("Author must not be empty."),
];

module.exports = validateComment;
