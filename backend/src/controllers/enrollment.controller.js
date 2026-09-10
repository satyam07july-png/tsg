const pool = require("../config/db");

// ==========================================
// 1. MANUAL OR FREE ENROLLMENT
// ==========================================
exports.enrollCourse = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { courseId } = req.body;

    if (!courseId) {
      return res.status(400).json({
        success: false,
        message: "courseId is required",
      });
    }

    const existingEnrollment = await pool.query(
      `SELECT * FROM enrollments
       WHERE (user_id = $1 OR student_id = $1) AND course_id = $2`,
      [userId, courseId]
    );

    if (existingEnrollment.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Already enrolled in this course",
        enrollment: existingEnrollment.rows[0],
      });
    }

    const enrollment = await pool.query(
      `INSERT INTO enrollments (user_id, student_id, course_id, status)
       VALUES ($1, $1, $2, 'Active')
       RETURNING *`,
      [userId, courseId]
    );

    // Record activity
    try {
      await pool.query(
        `INSERT INTO activities (user_id, title, description, type)
         VALUES ($1, 'Course Enrolled', $2, 'Enrollment')`,
        [userId, `User enrolled in course ID ${courseId}`]
      );
    } catch {
      // Non-blocking activity log
    }

    res.status(201).json({
      success: true,
      message: "Enrolled successfully",
      enrollment: enrollment.rows[0],
    });
  } catch (error) {
    next(error);
  }
};

// ==========================================
// 2. GET MY ENROLLED COURSES
// ==========================================
exports.myCourses = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const courses = await pool.query(
      `
      SELECT
        courses.*,
        enrollments.enrolled_at,
        enrollments.status as enrollment_status,
        (
          SELECT COUNT(*)
          FROM lectures
          WHERE lectures.course_id = courses.id
        ) AS total_lectures,
        (
          SELECT COUNT(*)
          FROM video_progress
          WHERE video_progress.course_id = courses.id
            AND video_progress.user_id = $1
            AND video_progress.completed = true
        ) AS completed_lectures
      FROM enrollments
      JOIN courses ON enrollments.course_id = courses.id
      WHERE enrollments.user_id = $1 OR enrollments.student_id = $1
      ORDER BY enrollments.enrolled_at DESC
      `,
      [userId]
    );

    // Calculate completion percentage for each course
    const formattedCourses = courses.rows.map((course) => {
      const total = Number(course.total_lectures) || 0;
      const completed = Number(course.completed_lectures) || 0;
      const progressPercent = total > 0 ? Math.round((completed / total) * 100) : 0;
      return {
        ...course,
        progressPercent,
      };
    });

    res.status(200).json({
      success: true,
      courses: formattedCourses,
    });
  } catch (error) {
    next(error);
  }
};

// ==========================================
// 3. CHECK ENROLLMENT STATUS FOR A COURSE
// ==========================================
exports.checkEnrollment = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { courseId } = req.params;

    const query = await pool.query(
      `SELECT * FROM enrollments
       WHERE (user_id = $1 OR student_id = $1) AND course_id = $2`,
      [userId, courseId]
    );

    res.json({
      success: true,
      isEnrolled: query.rows.length > 0,
      enrollment: query.rows[0] || null,
    });
  } catch (error) {
    next(error);
  }
};