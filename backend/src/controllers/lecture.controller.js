// =========================
// UPLOAD LECTURE
// =========================

exports.uploadLecture =
  async (req, res) => {

    try {

      console.log(req.files);

      res.status(201).json({

        success: true,

        message:
          "Lecture Uploaded Successfully",

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

  };


// =========================
// GET LECTURES
// =========================

exports.getLectures =
  async (req, res) => {

    try {

      res.status(200).json({

        success: true,

        lectures: [],

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

  };