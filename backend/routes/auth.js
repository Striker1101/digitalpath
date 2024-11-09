const express = require("express");
const router = express.Router();
const passport = require("passport");
const Controller = require("../controllers/AuthController");
const { validateRegister } = require("../middleware/validations/register");
const isAuth = require("../middleware/auth/isAuth");
const {
  returnValidation,
  validateEmail,
  validatePassword,
} = require("../middleware/validations");
const { loginValidationRules } = require("../middleware/validations/login");
const isAdmin = require("../middleware/auth/isAdmin");

// sign in a user
router.post("/login", loginValidationRules, returnValidation, Controller.login);

// sign up a user
router.post(
  "/register",
  validateRegister,
  returnValidation,
  Controller.register
);

// send forget password mail
router.post(
  "/forget_password",
  validateEmail,
  returnValidation,
  Controller.forget_password
);

// confirm password reset
router.post(
  "/forget_password_confirm",
  validatePassword,
  returnValidation,
  Controller.forget_password_confirm
);

// send reset email mail
router.post("/reset_email", isAuth, Controller.reset_email);

// send reset email mail
router.post(
  "/reset_email_confirm",
  isAuth,
  validateEmail,
  returnValidation,
  Controller.reset_email_confirm
);

// Google Auth
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  Controller.third_party_auth
);

// Facebook Auth
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { session: false }),
  Controller.third_party_auth
);

module.exports = router;
