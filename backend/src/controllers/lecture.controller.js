const pool = require("../config/db");

const uploadLecture = async (req, res) => {

  try {

    const {

      title,

      course,

      teacher_id

    } = req.body;

    const videoUrl = req.file.path;

  const lecture = await pool.query(

  `
  INSERT INTO lectures
  (
    title,
    video_url,
    notes_url,
    course_id
  )

  VALUES ($1, $2, $3, $4)

  RETURNING *
  `,

  [

    title,

    video_url,

    notes_url,

    course_id

  ]

);

    res.status(201).json({

      message: "Lecture Uploaded Successfully",

      lecture: newLecture.rows[0],

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

};

const getLectures = async (req, res) => {

  try {

    const lectures = await pool.query(

      `
      SELECT * FROM lectures
      ORDER BY created_at DESC
      `
    );

    res.status(200).json(

      lectures.rows

    );

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

};

module.exports = {

  uploadLecture,

  getLectures,

};