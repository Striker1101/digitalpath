const sequelize = require("./index"); // Your sequelize instance
const Location = require("./models/Location");
const User = require("./models/User");

// Define associations here

// Location <-> User (One-to-Many)
Location.hasMany(User, { foreignKey: "location_id", as: "user" });
User.belongsTo(Location, { foreignKey: "location_id", as: "location" });

// Sync database
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: false }); // Use { force: true } to drop and recreate tables
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
};

// Export the function
module.exports = syncDatabase;
