const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const isAuth = async (req, res, next) => {
  try {
    // Check if the Authorization header is set
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ msg: "Unauthorized. No token provided." });
    }

    // Get the token from the header
    const token = authHeader.split(" ")[1];

    // Verify the token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // Attach user info to request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error(error);
    return res
      .status(401)
      .json({ msg: "Unauthorized. Token is invalid or expired." });
  }
};

module.exports = isAuth;
