require("dotenv").config(); // Load .env file
const { Sequelize } = require("sequelize");

// Initialize Sequelize instance using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME || "trackpip",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || "mysql", // Hard-code your dialect here for testing
  }
);

// Test the connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

module.exports = sequelize;
