const express = require("express");

const router = express.Router();

const {

  addCourse,

  getCourses,

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

module.exports = router;