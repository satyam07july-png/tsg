const pool = require("../config/db");

// ==========================================
// 1. GET STUDENT PROGRESS
// ==========================================
const getStudentProgress = async (req, res, next) => {
  try {
    const studentId = req.params.studentId || req.user?.id;

    if (!studentId) {
      return res.status(400).json({
        success: false,
        message: "studentId required",
      });
    }

    const videos = await pool.query(
      `SELECT COUNT(*) FROM video_progress
       WHERE (student_id = $1 OR user_id = $1)
       AND completed = true`,
      [studentId]
    );

    const assignments = await pool.query(
      `SELECT COUNT(*) FROM assignment_submissions
       WHERE student_id = $1`,
      [studentId]
    );

    const tests = await pool.query(
      `SELECT COUNT(*) FROM test_results
       WHERE student_id = $1`,
      [studentId]
    );

    const completedVideos = Number(videos.rows[0].count) || 0;
    const completedAssignments = Number(assignments.rows[0].count) || 0;
    const completedTests = Number(tests.rows[0].count) || 0;

    const totalCompleted = completedVideos + completedAssignments + completedTests;
    const progress = Math.min(100, totalCompleted * 10);

    res.status(200).json({
      success: true,
      progress,
      completedVideos,
      assignments: completedAssignments,
      tests: completedTests,
    });
  } catch (error) {
    next(error);
  }
};

// ==========================================
// 2. MARK LECTURE COMPLETE / UPDATE PROGRESS
// ==========================================
const updateLectureProgress = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { lectureId, courseId, completed = true, watchedSeconds = 0 } = req.body;

    if (!lectureId) {
      return res.status(400).json({
        success: false,
        message: "lectureId is required",
      });
    }

    // Upsert video progress record
    const result = await pool.query(
      `INSERT INTO video_progress
       (user_id, student_id, lecture_id, course_id, completed, watched_seconds, updated_at)
       VALUES ($1, $1, $2, $3, $4, $5, CURRENT_TIMESTAMP)
       ON CONFLICT (user_id, lecture_id)
       DO UPDATE SET
         completed = EXCLUDED.completed,
         watched_seconds = EXCLUDED.watched_seconds,
         updated_at = CURRENT_TIMESTAMP
       RETURNING *`,
      [userId, Number(lectureId), courseId ? Number(courseId) : null, Boolean(completed), Number(watchedSeconds)]
    );

    // Calculate course progress percentage if courseId is available
    let progressPercent = 0;
    if (courseId) {
      const totalLecturesQuery = await pool.query(
        "SELECT COUNT(*) FROM lectures WHERE course_id = $1",
        [courseId]
      );
      const completedQuery = await pool.query(
        "SELECT COUNT(*) FROM video_progress WHERE user_id = $1 AND course_id = $2 AND completed = true",
        [userId, courseId]
      );

      const total = Number(totalLecturesQuery.rows[0].count) || 0;
      const done = Number(completedQuery.rows[0].count) || 0;
      progressPercent = total > 0 ? Math.round((done / total) * 100) : 0;
    }

    res.status(200).json({
      success: true,
      message: "Progress updated successfully 🚀",
      progress: result.rows[0],
      progressPercent,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getStudentProgress,
  updateLectureProgress,
};