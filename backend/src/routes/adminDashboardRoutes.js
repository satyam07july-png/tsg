const express = require("express");
const router = express.Router();
const pool = require("../config/db");

router.get("/dashboard", async (req, res) => {

  try {

    const studentsResult =
      await pool.query(
        "SELECT COUNT(*) FROM students"
      );

    const teachersResult =
      await pool.query(`
        SELECT COUNT(*)
        FROM users
        WHERE role='teacher'
      `);

    let coursesCount = 0;

    try {

      const coursesResult =
        await pool.query(
          "SELECT COUNT(*) FROM courses"
        );

      coursesCount =
        coursesResult.rows[0].count;

    } catch {

      coursesCount = 0;

    }

    const recentStudents =
      await pool.query(`
        SELECT *
        FROM students
        ORDER BY id DESC
        LIMIT 5
      `);

    let recentPayments = [];

    let revenue = 0;

    try {

      const paymentResult =
        await pool.query(`
          SELECT *
          FROM payments
          ORDER BY id DESC
          LIMIT 5
        `);

      recentPayments =
        paymentResult.rows;

      const revenueResult =
        await pool.query(`
          SELECT COALESCE(
            SUM(amount),
            0
          ) AS revenue
          FROM payments
        `);

      revenue =
        revenueResult.rows[0].revenue;

    } catch {

      recentPayments = [];
      revenue = 0;

    }

    res.json({

      stats: {

        totalStudents:
          Number(
            studentsResult.rows[0]
              .count
          ),

        totalTeachers:
          Number(
            teachersResult.rows[0]
              .count
          ),

        totalCourses:
          Number(coursesCount),

        revenue:
          Number(revenue),

      },

      recentStudents:
        recentStudents.rows,

      recentPayments,

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,
      message:
        "Dashboard Error",

    });

  }

});

module.exports = router;