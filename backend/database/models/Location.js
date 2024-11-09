const { DataTypes } = require("sequelize");
const sequelize = require("../index"); // Sequelize instance

// Define the Location model
const Location = sequelize.define(
  "Location",
  {
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    type: {
      type: DataTypes.ENUM("user", "project"),
      allowNull: false,
      defaultValue: "project",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = Location;
