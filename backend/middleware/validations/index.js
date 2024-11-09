const { check, body, validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");

// Middleware to return validation errors and delete saved files if needed
exports.returnValidation = (req, res, next) => {
  const errors = validationResult(req);

  // If there are validation errors
  if (!errors.isEmpty()) {
    // If the file was saved and there are validation errors, delete the file
    if (req.saved) {
      req.files["files"].forEach((file) => {
        const filePath = path.join(__dirname, "..", "..", file.path);
        fs.unlink(filePath, (err) => {
          if (err) console.error(`Error deleting file: ${err.message}`);
        });
      });

      if (req.files["show"]) {
        const filePath = path.join(
          __dirname,
          "..",
          "..",
          req.files["show"][0].path
        );
        fs.unlink(filePath, (err) => {
          if (err) console.log("Error deleting file " + err.message);
        });
      }
    }

    // Return validation errors
    return res.status(400).json({ errors: errors.array() });
  }

  // If no errors, proceed to the next middleware or handler
  next();
};

exports.validateEmail = [
  body("email").isEmail().withMessage("Valid email is required"),
];

exports.validatePassword = [
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
  check("confirm_password", "Confirm Password is required").exists(),
  check("confirm_password").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Confirm Password does not match Password");
    }
    return true; // Indicates the success of this synchronous custom validator
  }),
];
