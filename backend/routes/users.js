const express = require("express");
const router = express.Router();
const Controller = require("../controllers/UserController");
const isAdmin = require("../middleware/auth/isAdmin");
const UserValidationRules = require("../middleware/validations/user");
const isAuth = require("../middleware/auth/isAuth");
const {
  validateEmail,
  returnValidation,
} = require("../middleware/validations");
const upload = require("../config/multerConfig");

// Add the /is_logged route before the /:id route
router.get("/is_logged", isAuth, Controller.isLoggedIn);

// Get all users
router.get("/", Controller.get);

// Route for newsletter subscription
router.post(
  "/newsletter",
  validateEmail,
  returnValidation,
  Controller.newsLetter
);

// Get a user by ID
router.get("/:id", Controller.show);

// UPDATE (PUT) - Update an entire user by ID
router.put(
  "/:id",
  isAuth,
  upload,
  UserValidationRules,
  returnValidation,
  Controller.update
);

// DELETE - Remove a user by ID
router.delete("/:id", isAuth, Controller.delete);

module.exports = router;
