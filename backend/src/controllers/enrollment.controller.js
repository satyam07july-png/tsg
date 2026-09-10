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

    // Resolve course (by id or course_id slug)
    const courseRes = await pool.query(
      "SELECT id, course_id, title FROM courses WHERE id::text = $1 OR course_id = $1",
      [courseId]
    );

    if (courseRes.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    const course = courseRes.rows[0];

    // Find or create student record
    const studentCheck = await pool.query(
      "SELECT id FROM students WHERE user_id = $1",
      [userId]
    );
    let studentRecordId;
    if (studentCheck.rows.length > 0) {
      studentRecordId = studentCheck.rows[0].id;
      await pool.query(
        `UPDATE students 
         SET course_id = $1, course_code = $2, course = $3, updated_at = CURRENT_TIMESTAMP
         WHERE id = $4`,
        [course.id, course.course_id, course.title, studentRecordId]
      );
    } else {
      const userRes = await pool.query("SELECT name, email, phone FROM users WHERE id = $1", [userId]);
      const u = userRes.rows[0];
      const studentCode = `STU-${Date.now().toString().slice(-4)}`;
      const newStu = await pool.query(
        `INSERT INTO students (user_id, student_id, name, email, phone, course, course_id, course_code, status)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'Active') RETURNING id`,
        [userId, studentCode, u?.name || "Student", u?.email || "", u?.phone || null, course.title, course.id, course.course_id]
      );
      studentRecordId = newStu.rows[0].id;
    }

    const existingEnrollment = await pool.query(
      `SELECT * FROM enrollments
       WHERE user_id = $1 AND course_id = $2`,
      [userId, course.id]
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
       VALUES ($1, $2, $3, 'Active')
       RETURNING *`,
      [userId, studentRecordId, course.id]
    );

    // Record activity
    try {
      await pool.query(
        `INSERT INTO activities (user_id, title, description, type)
         VALUES ($1, 'Course Enrolled', $2, 'Enrollment')`,
        [userId, `User enrolled in course: ${course.title} (Code: ${course.course_id})`]
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
      SELECT DISTINCT
        courses.*,
        COALESCE(enrollments.enrolled_at, students.created_at) as enrolled_at,
        COALESCE(enrollments.status, students.status, 'Active') as enrollment_status,
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
      FROM courses
      LEFT JOIN enrollments ON enrollments.course_id = courses.id AND enrollments.user_id = $1
      LEFT JOIN students ON (students.course_id = courses.id OR students.course_code = courses.course_id) AND students.user_id = $1
      WHERE (enrollments.id IS NOT NULL OR students.id IS NOT NULL)
      ORDER BY enrolled_at DESC
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

    // Resolve target course ID
    const courseRes = await pool.query(
      "SELECT id FROM courses WHERE id::text = $1 OR course_id = $1",
      [courseId]
    );

    if (courseRes.rows.length === 0) {
      return res.json({
        success: true,
        isEnrolled: false,
        enrollment: null,
      });
    }

    const targetCourseId = courseRes.rows[0].id;

    const query = await pool.query(
      `SELECT * FROM enrollments
       WHERE user_id = $1 AND course_id = $2`,
      [userId, targetCourseId]
    );

    const studentCheck = await pool.query(
      `SELECT id FROM students WHERE user_id = $1 AND course_id = $2`,
      [userId, targetCourseId]
    );

    const isEnrolled = query.rows.length > 0 || studentCheck.rows.length > 0;

    res.json({
      success: true,
      isEnrolled,
      enrollment: query.rows[0] || (studentCheck.rows[0] ? { course_id: targetCourseId, status: "Active" } : null),
    });
  } catch (error) {
    next(error);
  }
};