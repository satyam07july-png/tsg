const express = require("express");
const router = express.Router();
const {
  addCourse,
  getCourses,
  getSingleCourse,
  getTeacherCourses,
} = require("../controllers/course.controller");
const { verifyToken } = require("../middleware/auth.middleware");
const { checkRole } = require("../middleware/role.middleware");

// Public Course Discovery
router.get("/", getCourses);
router.get("/teacher", verifyToken, checkRole("teacher", "admin"), getTeacherCourses);
router.get("/:id", getSingleCourse);

// Add Course (Admin or Teacher)
router.post("/add", verifyToken, checkRole("admin", "teacher"), addCourse);

module.exports = router;