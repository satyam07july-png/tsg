const pool = require("../config/db");

exports.createAssignment = async (req, res) => {
  try {
    const {
      title,
      description,
      courseId,
    } = req.body;

    const assignment = await pool.query(
      `INSERT INTO assignments
      (title, description, course_id)
      VALUES ($1,$2,$3)
      RETURNING *`,
      [title, description, courseId]
    );

    res.status(201).json({
      success: true,
      assignment: assignment.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.submitAssignment = async (req, res) => {
  try {
    const studentId = req.user.id;

    const {
      assignmentId,
      submissionUrl,
    } = req.body;

    const submission = await pool.query(
      `INSERT INTO assignment_submissions
      (assignment_id, student_id, submission_url)
      VALUES ($1,$2,$3)
      RETURNING *`,
      [
        assignmentId,
        studentId,
        submissionUrl,
      ]
    );

    res.status(201).json({
      success: true,
      submission: submission.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.reviewSubmission = async (req, res) => {
  try {
    const {
      submissionId,
      marks,
      feedback,
    } = req.body;

    const review = await pool.query(
      `UPDATE assignment_submissions
       SET marks=$1,
           feedback=$2
       WHERE id=$3
       RETURNING *`,
      [marks, feedback, submissionId]
    );

    res.status(200).json({
      success: true,
      review: review.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};