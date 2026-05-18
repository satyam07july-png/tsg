const pool = require("../config/db");

exports.enrollCourse = async (req, res) => {
  try {
    const studentId = req.user.id;

    const { courseId } = req.body;

    const existingEnrollment = await pool.query(
      `SELECT * FROM enrollments
       WHERE student_id=$1 AND course_id=$2`,
      [studentId, courseId]
    );

    if (existingEnrollment.rows.length > 0) {
      return res.status(400).json({
        message: "Already enrolled",
      });
    }

    const enrollment = await pool.query(
      `INSERT INTO enrollments
      (student_id, course_id)
      VALUES ($1, $2)
      RETURNING *`,
      [studentId, courseId]
    );

    res.status(201).json({
      success: true,
      enrollment: enrollment.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.myCourses = async (req, res) => {
  try {
    const studentId = req.user.id;

    const courses = await pool.query(
      `
      SELECT courses.*
      FROM enrollments
      JOIN courses
      ON enrollments.course_id = courses.id
      WHERE enrollments.student_id = $1
      `,
      [studentId]
    );
    
    await addActivity(

  "Course Enrollment",

  `Student enrolled in course ID ${course_id}`

);

    res.status(200).json({
      success: true,
      courses: courses.rows,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};