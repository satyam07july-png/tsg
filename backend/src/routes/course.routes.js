const express = require("express");

const router = express.Router();

const {

  addCourse,

  getCourses,
  getSingleCourse,
} = require(
  "../controllers/course.controller"
);


// ==========================
// ADD COURSE
// ==========================

router.post(
  "/add",
  addCourse
);


// ==========================
// GET COURSES
// ==========================

router.get(
  "/",
  getCourses
);

// ==========================
// GET SINGLE COURSE
// ==========================

router.get(
  "/:id",
  getSingleCourse
);

module.exports = router;