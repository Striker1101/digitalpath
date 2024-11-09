const Users = require("../database/models/User"); // Import the Users model
const keys = require("../config/keys");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const fs = require("fs");
const transportMail = require("../config/nodemailer");
const path = require("path");

//get all users
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await Users.findOne({ where: { email } });

    if (!user) {
      return res
        .status(400)
        .json({ msg: "Invalid credentials, Email does not exist" });
    }

    // Compare the password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ msg: "Invalid credentials, password is Wrong" });
    }

    // Create JWT payload
    const payload = {
      user: {
        id: user.id,
        email: user.email,
        role: user.role, // You can add other user details as needed
      },
    };

    // Sign the token
    jwt.sign(
      payload,
      keys.secretOrKey,
      { expiresIn: "1h" }, // Token expires in 1 hour
      (err, token) => {
        if (err) throw err;
        res.json({
          user,
          token,
          msg: `${user.name} was logged in successfully`,
        });
      }
    );
  } catch (err) {
    console.error("Login error: ", err.message);
    res.status(500).send("Server error");
  }
};

//create new user
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user exists
    let user = await Users.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({ msg: "Users already exists" });
    }

    // Create a new user
    user = new Users({
      name,
      email,
      password,
    });

    await user.save();

    // Generate JWT token
    const payload = {
      id: user.id,
      name: user.name,
    };

    jwt.sign(
      payload,
      keys.secretOrKey,
      { expiresIn: "1h" }, // Token expires in 1 hour
      (err, token) => {
        if (err) throw err;
        res.json({
          user,
          token,
          msg: `${user.name} account has been Created`,
        });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// forgotten password send email
exports.forget_password = async (req, res) => {
  const { email } = req.body;

  try {
    // Find the user by email
    const user = await Users.findOne({ where: { email } });

    // Check if user is null
    if (!user) {
      return res.status(404).json({ msg: "User not found" }); // Return 404 if user not found
    }

    // Generate a reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetToken = resetToken;
    user.resetTokenExpiry = Date.now() + 3600000; // Token valid for 1 hour
    await user.save();

    // Read the HTML template
    const filePath = path.join(__dirname, "../mails/forgetpassword.html");
    let mailTemplate = fs.readFileSync(filePath, "utf-8");

    // Replace the reset link in the template
    const resetLink = `${process.env.FRONTEND_URL}forget_password_confirm?reset_token=${resetToken}&id=${user.id}`;
    mailTemplate = mailTemplate.replace("{{resetLink}}", resetLink);

    // Send email

    const transporter = transportMail;

    const mailOptions = {
      to: email,
      subject: "Password Reset",
      html: mailTemplate, // Use the modified HTML template
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ msg: "Reset link sent to your email" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error" });
  }
};

//set new  password
exports.forget_password_confirm = async (req, res) => {
  // Find the user by ID
  const { reset_token, id } = req.query; // Get reset_token and id from query
  const { confirm_password, password } = req.body; // Get new password from body

  if (!id) {
    return res.status(400).json({ msg: "User ID is required" });
  }

  try {
    const user = await Users.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Check if the reset token is valid and not expired
    if (user.resetToken !== reset_token || Date.now() > user.resetTokenExpiry) {
      return res.status(400).json({ msg: "Invalid or expired token" });
    }

    // Validate that both passwords match
    if (password !== confirm_password) {
      return res.status(400).json({ msg: "Passwords do not match" });
    }

    //reset new password
    user.password = password;

    // Clear the reset token and expiry
    user.resetToken = null;
    user.resetTokenExpiry = null;

    // Save the user
    await user.save();

    return res
      .status(200)
      .json({ msg: "Password has been reset successfully." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error" });
  }
};

//reset email || send email
exports.reset_email = async (req, res) => {
  const { email } = req.body;

  try {
    // Find the user by email
    const user = await Users.findOne({ where: { email } });

    // Check if user is null
    if (!user) {
      return res.status(404).json({ msg: "User not found" }); // Return 404 if user not found
    }

    // Generate a reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetToken = resetToken;
    user.resetTokenExpiry = Date.now() + 3600000; // Token valid for 1 hour
    await user.save();

    // Read the HTML template
    const filePath = path.join(__dirname, "../mails/resetemail.html");
    let mailTemplate = fs.readFileSync(filePath, "utf-8");

    // Replace the reset link in the template
    const resetLink = `${process.env.FRONTEND_URL}reset_email_confirm?resetToken=${resetToken}&id=${user.id}`;
    mailTemplate = mailTemplate.replace("{{resetLink}}", resetLink);

    // Configure email transport
    const transporter = transportMail;

    const mailOptions = {
      to: email,
      subject: "Email Reset Request",
      html: mailTemplate, // Use the modified HTML template
    };

    await transporter.sendMail(mailOptions);
    return res
      .status(200)
      .json({ msg: "Reset email sent to your email address." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error" });
  }
};

// set new email
exports.reset_email_confirm = async (req, res) => {
  const { reset_token, id } = req.query; // Get reset_token from params
  const { email } = req.body; // Get new email from body

  if (!id) {
    return res.status(400).json({ msg: "User ID is required" });
  }
  try {
    // Find the user by reset token
    const user = await Users.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Check if the reset token is valid and not expired
    if (user.resetToken !== reset_token || Date.now() > user.resetTokenExpiry) {
      return res.status(400).json({ msg: "Invalid or expired token" });
    }

    // Update user's email
    user.email = email;
    user.resetToken = null; // Clear the reset token
    user.resetTokenExpiry = null; // Clear the expiry
    await user.save();

    return res
      .status(200)
      .json({ msg: "Email has been updated successfully." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error." });
  }
};

exports.third_party_auth = async (req, res) => {
  try {
    // Custom logic here if needed
    const token = jwt.sign(
      { id: req.user.id, email: req.user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token, msg: `${req.user.email} was logged in successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong during authentication" });
  }
};
