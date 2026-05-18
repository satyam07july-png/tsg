const pool = require("../config/db");

const getStudentProgress = async (req, res) => {

  try {

    const { studentId } = req.params;

    // VIDEOS COMPLETED

    const videos = await pool.query(

      `SELECT COUNT(*) FROM video_progress
       WHERE student_id = $1
       AND completed = true`,

      [studentId]

    );

    // ASSIGNMENTS

    const assignments = await pool.query(

      `SELECT COUNT(*) FROM assignment_submissions
       WHERE student_id = $1`,

      [studentId]

    );

    // TESTS

    const tests = await pool.query(

      `SELECT COUNT(*) FROM test_results
       WHERE student_id = $1`,

      [studentId]

    );

    const totalCompleted =

      parseInt(videos.rows[0].count) +

      parseInt(assignments.rows[0].count) +

      parseInt(tests.rows[0].count);

    // SIMPLE %

    const progress = totalCompleted * 10;

    res.status(200).json({

      progress,

      completedVideos: videos.rows[0].count,

      assignments: assignments.rows[0].count,

      tests: tests.rows[0].count,

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

};

module.exports = {

  getStudentProgress,

};