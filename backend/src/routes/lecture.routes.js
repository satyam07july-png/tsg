const express = require("express");

const router = express.Router();

const multer = require("multer");

const {
  uploadLecture,
  getLectures,
} = require(
  "../controllers/lecture.controller"
);


// MULTER

const storage = multer.memoryStorage();

const upload = multer({
  storage,
});


// UPLOAD ROUTE

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


// GET LECTURES

router.get(
  "/",
  getLectures
);

module.exports = router;