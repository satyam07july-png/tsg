const pool = require("../config/db");

exports.getAssignments = async (req, res) => {
  try {
    const courseId = req.query.courseId || req.query.course_id;
    let query = "SELECT * FROM assignments ORDER BY id DESC";
    let params = [];

    if (courseId) {
      query = "SELECT * FROM assignments WHERE course_id = $1 ORDER BY id DESC";
      params = [Number(courseId)];
    }

    const result = await pool.query(query, params);

    res.status(200).json({
      success: true,
      count: result.rows.length,
      assignments: result.rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "DELETE FROM assignments WHERE id = $1 RETURNING id",
      [Number(id)]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Assignment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Assignment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.createAssignment = async (req, res) => {
  try {
    const {
      title,
      description,
      courseId,
      course_id,
      due_date,
      dueDate,
      max_marks,
      maxMarks,
      resource_url,
      resourceUrl,
    } = req.body;

    const targetCourseId = courseId || course_id;
    if (!title || !targetCourseId) {
      return res.status(400).json({
        success: false,
        message: "Assignment title and courseId are required",
      });
    }

    const assignment = await pool.query(
      `INSERT INTO assignments
      (title, description, course_id, due_date, max_marks, resource_url)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *`,
      [
        title,
        description || "",
        Number(targetCourseId),
        due_date || dueDate || null,
        Number(max_marks || maxMarks || 100),
        resource_url || resourceUrl || "",
      ]
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