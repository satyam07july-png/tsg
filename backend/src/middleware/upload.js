const multer = require("multer");

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 150 * 1024 * 1024, // 150MB limit to support larger lecture videos
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "video/mp4",
      "video/webm",
      "video/quicktime",
      "video/x-matroska",
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (
      allowedTypes.includes(file.mimetype) ||
      file.mimetype.startsWith("video/") ||
      file.mimetype.startsWith("image/")
    ) {
      cb(null, true);
    } else {
      cb(new Error(`Invalid file type: ${file.mimetype}. Allowed types: Video, PDF, Images.`));
    }
  },
});

module.exports = upload;