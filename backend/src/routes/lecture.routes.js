const express = require("express");

const multer = require("multer");

const router = express.Router();


// =========================
// DUMMY CONTROLLERS
// =========================

const uploadLecture =
  async (req, res) => {

    try {

      res.status(201).json({

        success: true,

        message:
          "Lecture Uploaded Successfully",

      });

    }

    catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

  };


const getLectures =
  async (req, res) => {

    try {

      res.status(200).json({

        success: true,

        lectures: [],

      });

    }

    catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

  };


// =========================
// MULTER
// =========================

const storage =
  multer.memoryStorage();

const upload = multer({
  storage,
});


// =========================
// ROUTES
// =========================

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


router.get(

  "/",

  getLectures

);


module.exports = router;