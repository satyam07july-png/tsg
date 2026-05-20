const streamifier = require("streamifier");

const cloudinary =
require("../config/cloudinary");


// UPLOAD LECTURE

const uploadLecture = async (req, res) => {

  try {

    const {
      title,
      description,
      course_id,
    } = req.body;

    // VIDEO CHECK

    if (!req.files.video) {

      return res.status(400).json({
        success: false,
        message: "Video is required",
      });

    }

    // PDF CHECK

    if (!req.files.pdf) {

      return res.status(400).json({
        success: false,
        message: "PDF is required",
      });

    }

    // =========================
    // VIDEO CLOUDINARY UPLOAD
    // =========================

    const uploadVideo =
      () =>
        new Promise((resolve, reject) => {

          const stream =
            cloudinary.uploader.upload_stream(
              {
                resource_type: "video",
                folder: "lms_videos",
              },
              (error, result) => {

                if (result) {

                  resolve(result);

                } else {

                  reject(error);

                }

              }
            );

          streamifier
            .createReadStream(
              req.files.video[0].buffer
            )
            .pipe(stream);

        });

    // =========================
    // PDF CLOUDINARY UPLOAD
    // =========================

    const uploadPdf =
      () =>
        new Promise((resolve, reject) => {

          const stream =
            cloudinary.uploader.upload_stream(
              {
                resource_type: "raw",
                folder: "lms_notes",
              },
              (error, result) => {

                if (result) {

                  resolve(result);

                } else {

                  reject(error);

                }

              }
            );

          streamifier
            .createReadStream(
              req.files.pdf[0].buffer
            )
            .pipe(stream);

        });

    // UPLOAD BOTH

    const videoResult =
      await uploadVideo();

    const pdfResult =
      await uploadPdf();

    // =========================
    // SAVE TO DB
    // =========================

    const lectureData = {

      title,

      description,

      course_id,

      video_url:
        videoResult.secure_url,

      notes_url:
        pdfResult.secure_url,

    };

    console.log(lectureData);

    // TODO:
    // Save in MongoDB

    res.status(200).json({

      success: true,

      message:
        "Lecture Uploaded Successfully 🚀",

      lecture: lectureData,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};

module.exports = {
  uploadLecture,
};