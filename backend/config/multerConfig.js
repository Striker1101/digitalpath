const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Helper function to check file type (image or video) based on extension
const getFileType = (file) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const imageExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".bmp",
    ".tiff",
    ".webp",
  ];
  const videoExtensions = [
    ".mp4",
    ".avi",
    ".mov",
    ".wmv",
    ".flv",
    ".mkv",
    ".webm",
  ];

  if (imageExtensions.includes(ext)) return "image";
  if (videoExtensions.includes(ext)) return "video";
  return "unknown";
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const fileType = getFileType(file);
    let dir;

    if (fileType === "image") {
      dir = "public/images";
    } else if (fileType === "video") {
      dir = "public/videos";
    } else {
      req.saved = false;
      return cb(new Error("Unsupported file type"), null);
    }

    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    req.saved = true;
    cb(null, uniqueName);
  },
});

// Multer middleware for handling multiple file fields
const upload = multer({
  storage: storage,
}).fields([
  { name: "show", maxCount: 1 }, // Single file for "show"
  { name: "files", maxCount: 10 }, // Multiple files for "files"
]);

module.exports = upload;
