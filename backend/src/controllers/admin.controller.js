const pool = require("../config/db");

exports.getDashboardAnalytics = async (req, res) => {
  try {

    const totalUsers = await pool.query(
      `SELECT COUNT(*) FROM users`
    );

    const totalCourses = await pool.query(
      `SELECT COUNT(*) FROM courses`
    );

    const totalEnrollments = await pool.query(
      `SELECT COUNT(*) FROM enrollments`
    );

    const totalRevenue = await pool.query(`
      SELECT COALESCE(SUM(amount),0) AS total_revenue
      FROM payments
      WHERE payment_status='success'
    `);

    const totalQuizzes = await pool.query(
      `SELECT COUNT(*) FROM quizzes`
    );

    const totalAssignments = await pool.query(
      `SELECT COUNT(*) FROM assignments`
    );

    res.status(200).json({
      success: true,

      analytics: {
        totalUsers:
          totalUsers.rows[0].count,

        totalCourses:
          totalCourses.rows[0].count,

        totalEnrollments:
          totalEnrollments.rows[0].count,

        totalRevenue:
          totalRevenue.rows[0].total_revenue,

        totalQuizzes:
          totalQuizzes.rows[0].count,

        totalAssignments:
          totalAssignments.rows[0].count,
      },
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
};