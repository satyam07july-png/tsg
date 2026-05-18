const express = require("express");

const router = express.Router();

const {

  addCourse,

  getCourses,

  getSingleCourse,

  deleteCourse,

  updateCourse,

} = require("../controllers/course.controller");


// ADD COURSE

router.post("/add", addCourse);


// GET ALL COURSES

router.get("/", getCourses);


// GET SINGLE COURSE

router.get("/:id", getSingleCourse);

// Delete course 

router.delete("/:id", deleteCourse);

// Edit course

router.put("/:id", updateCourse);


module.exports = router;