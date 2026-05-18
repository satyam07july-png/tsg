const pool = require("../config/db");

exports.createSection = async (req, res) => {
  try {
    const { title, courseId } = req.body;

    const newSection = await pool.query(
      `INSERT INTO sections
      (title, course_id)
      VALUES ($1, $2)
      RETURNING *`,
      [title, courseId]
    );

    res.status(201).json({
      success: true,
      section: newSection.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};