const multer = require("multer");
const path = require("path");

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const fileType = file.mimetype.split("/")[0]; // Get file type (image or video)
    const dir =
      fileType === "image"
        ? "./backend/public/images"
        : "./backend/public/videos"; // Set directory based on file type
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Save with timestamp
  },
});

const upload = multer({ storage });

module.exports = upload;
