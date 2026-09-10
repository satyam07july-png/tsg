const express = require("express");
const router = express.Router();
const {
  getStudentProgress,
  updateLectureProgress,
} = require("../controllers/progress.controller");
const { verifyToken } = require("../middleware/auth.middleware");

// Update or mark lecture complete
router.post("/update", verifyToken, updateLectureProgress);
router.post("/mark-complete", verifyToken, updateLectureProgress);

// Get student progress
router.get("/:studentId", verifyToken, getStudentProgress);
router.get("/", verifyToken, getStudentProgress);

module.exports = router;