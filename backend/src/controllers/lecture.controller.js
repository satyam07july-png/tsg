const streamifier = require("streamifier");

const cloudinary =
require("../config/cloudinary");


// UPLOAD LECTURE

const uploadLecture = async (req, res) => {

  try {

    console.log("FILES:", req.files);

    console.log("BODY:", req.body);

    const {
      title,
      description,
      course_id,
    } = req.body;

    // =========================
    // VALIDATION
    // =========================

    if (!req.files?.video) {

      return res.status(400).json({

        success: false,

        message: "Video is required",

      });

    }

    if (!req.files?.pdf) {

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

                if (error) {

                  console.log(
                    "VIDEO CLOUDINARY ERROR:",
                    error
                  );

                  reject(error);

                }

                else {

                  resolve(result);

                }

              }

            );

          streamifier

            .createReadStream(
              req.files?.video?.[0]?.buffer
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

                if (error) {

                  console.log(
                    "PDF CLOUDINARY ERROR:",
                    error
                  );

                  reject(error);

                }

                else {

                  resolve(result);

                }

              }

            );

          streamifier

            .createReadStream(
              req.files?.pdf?.[0]?.buffer
            )

            .pipe(stream);

        });

    // =========================
    // UPLOAD BOTH
    // =========================

    console.log("Uploading Video...");

    const videoResult =
      await uploadVideo();

    console.log(
      "Video Uploaded:",
      videoResult.secure_url
    );

    console.log("Uploading PDF...");

    const pdfResult =
      await uploadPdf();

    console.log(
      "PDF Uploaded:",
      pdfResult.secure_url
    );

    // =========================
    // FINAL DATA
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

    console.log(
      "LECTURE DATA:",
      lectureData
    );

    // =========================
    // SUCCESS RESPONSE
    // =========================

    res.status(200).json({

      success: true,

      message:
        "Lecture Uploaded Successfully 🚀",

      lecture: lectureData,

    });

  } catch (error) {

    console.log(
      "UPLOAD ERROR:",
      error
    );

    res.status(500).json({

      success: false,

      message:
        error.message ||
        "Internal Server Error",

    });

  }

};

module.exports = {
  uploadLecture,
};