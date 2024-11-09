const sequelize = require("./index"); // Sequelize instance
const Location = require("./models/Location");
const User = require("./models/User");
const Blog = require("./models/Blog");
const Project = require("./models/Project");
const Category = require("./models/Category");
const Comment = require("./models/Comment");
const Tag = require("./models/Tag");
const Media = require("./models/Media");
const Notification = require("./models/Notification");
const Partner = require("./models/Partner");
const Url = require("./models/Url");
const Team = require("./models/Team");

// Seed data
const seedData = async () => {
  try {
    const categories = [
      {
        name: "Architecture Design",
        description:
          "Lorem Ipsum is simply dummy text of the printing and type.",
        icon: "flaticon-mansion",
      },
      {
        name: "Smart Interior Design",
        description:
          "Lorem Ipsum is simply dummy text of the printing and type.",
        icon: "flaticon-stair",
      },
      {
        name: "Residential Design",
        description:
          "Lorem Ipsum is simply dummy text of the printing and type.",
        icon: "flaticon-apartment",
      },
      {
        name: "Landscape Design",
        description:
          "Lorem Ipsum is simply dummy text of the printing and type.",
        icon: "flaticon-photo",
      },
      {
        name: "Plans and Projects",
        description:
          "Lorem Ipsum is simply dummy text of the printing and type.",
        icon: "flaticon-sketch",
      },
      {
        name: "Kitchen Design",
        description:
          "Lorem Ipsum is simply dummy text of the printing and type.",
        icon: "flaticon-kitchen",
      },
    ];

    const tags = [
      {
        name: "Architecture",
      },
      {
        name: "ConstructionManagement",
      },
      {
        name: "BuildingMaterials",
      },
      {
        name: "SiteSafety",
      },
      {
        name: "ResidentialConstruction",
      },
      {
        name: "SustainableBuilding",
      },
    ];

    // Seed the categories into the database
    for (const category of categories) {
      await Category.create(category);
    }

    for (const tag of tags) {
      await Tag.create(tag);
    }

    console.log(" seeded successfully.");
  } catch (error) {
    console.error("Error seeding categories:", error);
  }
};

// Run the seed function
seedData();
