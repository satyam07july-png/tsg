const express = require("express");

const router = express.Router();

const {
  enrollCourse,
  myCourses,
} = require("../controllers/enrollment.controller");

const { verifyToken } = require("../middleware/auth.middleware");

router.post(
  "/enroll",
  verifyToken,
  enrollCourse
);

router.get(
  "/my-courses",
  verifyToken,
  myCourses
);

module.exports = router;