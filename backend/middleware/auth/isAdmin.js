// middleware/isAdmin.js
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Use the same secret as in your login route

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("Authorization");

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token.split(" ")[1], keys.secretOrKey); // Split Bearer token

    // Check if the user's role is admin

    if (decoded.user.role !== "admin") {
      return res.status(403).json({ msg: "Access denied: Admins only" });
    }

    // If the user is admin, proceed to the next middleware/route
    req.user = decoded.user; // Set user data on req object
    next();
  } catch (err) {
    console.error("Token verification failed:", err);
    res.status(401).json({ msg: "Invalid token" });
  }
};
