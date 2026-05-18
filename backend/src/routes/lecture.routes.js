const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const {

  uploadLecture,

  getLectures

} = require("../controllers/lecture.controller");

router.post(

  "/upload",

  upload.single("video"),

  uploadLecture

);

router.get(

  "/",

  getLectures

);

module.exports = router;