const express = require("express");
const router = express.Router();
const {
  enrollCourse,
  myCourses,
  checkEnrollment,
} = require("../controllers/enrollment.controller");
const { verifyToken } = require("../middleware/auth.middleware");

router.post("/enroll", verifyToken, enrollCourse);
router.get("/my-courses", verifyToken, myCourses);
router.get("/check/:courseId", verifyToken, checkEnrollment);

module.exports = router;