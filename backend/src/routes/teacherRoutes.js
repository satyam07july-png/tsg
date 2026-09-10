const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const { verifyToken } = require("../middleware/auth.middleware");

// GET ALL TEACHERS (Used for dropdowns in student assignment & public course details)
router.get("/", async (req, res, next) => {
  try {
    const teachers = await pool.query(`
      SELECT id, name, email, specialization, avatar
      FROM users
      WHERE role = 'teacher' AND status = 'Active'
      ORDER BY name ASC
    `);

    res.json(teachers.rows);
  } catch (error) {
    next(error);
  }
});

// GET TEACHER DETAILS BY ID
router.get("/:id", verifyToken, async (req, res, next) => {
  try {
    const { id } = req.params;
    const teacher = await pool.query(
      `SELECT id, name, email, specialization, phone, avatar, created_at
       FROM users
       WHERE id = $1 AND role = 'teacher'`,
      [id]
    );

    if (teacher.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    res.json(teacher.rows[0]);
  } catch (error) {
    next(error);
  }
});

module.exports = router;