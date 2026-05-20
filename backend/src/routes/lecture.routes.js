const express = require("express");

const router = express.Router();

const upload =
require("../middleware/upload");

const {
  uploadLecture,
} = require(
  "../controllers/lecture.controller"
);


// UPLOAD LECTURE

router.post(

  "/upload",

  upload.fields([

    {
      name: "video",
      maxCount: 1,
    },

    {
      name: "pdf",
      maxCount: 1,
    },

  ]),

  uploadLecture

);

module.exports = router;