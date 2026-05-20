const multer = require("multer");

// MEMORY STORAGE

const storage = multer.memoryStorage();

const upload = multer({
  storage,
});

module.exports = upload;