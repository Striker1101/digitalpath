const { check } = require("express-validator");

exports.mediaValidationRules = [
  check("parent_id").custom((value) => {
    // Check if the value is the string "null" and convert it to actual null
    if (value === "null") {
      value = null; // Use assignment to actually change the value
    } else {
      value = parseInt(value); // Convert the value to an integer
    }
    // Allow null or a positive integer
    if (value === null || (Number.isInteger(value) && value > 0)) {
      return true; // Valid case
    }

    // Error case
    throw new Error("Parent ID must be a positive integer or null.");
  }),

  check("type")
    .notEmpty()
    .withMessage("Media type is required.")
    .isIn([
      "project",
      "blog",
      "home_header",
      "home_grid",
      "news_header",
      "project_header",
      "about_us_header",
      "about_us_image",
      "contact_us_header",
    ])
    .withMessage("Invalid media type provided."),

  check("exe")
    .notEmpty()
    .withMessage("Media extension (exe) is required.")
    .isIn(["video", "image"])
    .withMessage("Media exe must be either 'video' or 'image'."),
];
