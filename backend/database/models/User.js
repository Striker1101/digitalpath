const { DataTypes } = require("sequelize");
const sequelize = require("../index"); // Sequelize instance
const bcrypt = require("bcryptjs"); // Import bcrypt

// Define the User model
const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Ensures it's a valid email
      },
    },
    googleId: DataTypes.STRING, // for Google authentication
    facebookId: DataTypes.STRING, // for Facebook authentication
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.ENUM("admin", "user"),
      defaultValue: "user",
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    remember_token: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    resetToken: {
      type: DataTypes.TEXT,
      allowNull: true, // Optional field
    },
    resetTokenExpiry: {
      type: DataTypes.DATE, // Use DATE type for Sequelize
      allowNull: true, // Optional field
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "locations",
        key: "id",
      },
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Before saving the user, hash the password if it has been modified
User.beforeSave(async (user, options) => {
  if (user.changed("password")) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});

module.exports = User;
