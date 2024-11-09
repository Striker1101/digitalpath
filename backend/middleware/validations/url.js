const { body } = require("express-validator");

// Validation rules for Url
const urlValidationRules = [
  body("name")
    .notEmpty()
    .withMessage("Name is required.")
    .isString()
    .withMessage("Name must be a string."),
  body("link")
    .notEmpty()
    .withMessage("Link is required.")
    .isURL({
      require_protocol: true,
      protocols: ["http", "https"], // Ensures only http/https are allowed
      require_valid_protocol: true,
      allow_underscores: true, // Allow underscores in domain
      allow_trailing_dot: false, // Disallow trailing dot
      allow_protocol_relative_urls: false, // Disallow protocol-relative URLs
      host_whitelist: false, // Allow any domain, including short ones like fb.com
    })
    .withMessage("Link must be a valid URL with a protocol (http/https)."),
  body("icon").optional().isString().withMessage("Icon must be a string."),
];

module.exports = urlValidationRules;
