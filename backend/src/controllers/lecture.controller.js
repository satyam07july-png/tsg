// =========================
// LECTURE CONTROLLER
// =========================

const uploadLecture =
  async (req, res) => {

    try {

      // FILES

      const video =
        req.files?.video?.[0];

      const pdf =
        req.files?.pdf?.[0];

      // BODY

      const {

        title,

        description,

      } = req.body;

      // VALIDATION

      if (!title) {

        return res.status(400).json({

          success: false,

          message:
            "Lecture title required",

        });

      }

      // RESPONSE

      res.status(201).json({

        success: true,

        message:
          "Lecture Uploaded Successfully",

        lecture: {

          title,

          description,

          video:
            video?.originalname ||

            null,

          pdf:
            pdf?.originalname ||

            null,

        },

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

const getLectures =
  async (req, res) => {

    try {

      res.status(200).json({

        success: true,

        lectures: [

          {

            id: 1,

            title:
              "React Full Course",

            description:
              "Learn complete React JS",

            video:
              "react.mp4",

            pdf:
              "notes.pdf",

          },

        ],

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
// EXPORTS
// =========================

module.exports = {

  uploadLecture,

  getLectures,

};