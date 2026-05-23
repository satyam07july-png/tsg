const express = require("express");

const router = express.Router();

const {

  addLecture,

  getLectures,

} = require("../controllers/lecture.controller");


// ADD LECTURE

router.post(
  "/add",
  addLecture
);


// GET LECTURES

router.get(
  "/",
  getLectures
);

module.exports = router;