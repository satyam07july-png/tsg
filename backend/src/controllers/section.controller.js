const pool = require("../config/db");

exports.createSection = async (req, res) => {
  try {
    const { title, courseId, course_id } = req.body;
    const targetCourseId = courseId || course_id;

    if (!title || !targetCourseId) {
      return res.status(400).json({
        success: false,
        message: "Section title and courseId are required",
      });
    }

    const newSection = await pool.query(
      `INSERT INTO sections (title, course_id) VALUES ($1, $2) RETURNING *`,
      [title, Number(targetCourseId)]
    );

    res.status(201).json({
      success: true,
      message: "Section created successfully",
      section: newSection.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getSections = async (req, res) => {
  try {
    const courseId = req.query.courseId || req.query.course_id;
    let query = "SELECT * FROM sections ORDER BY order_num ASC, id ASC";
    let params = [];

    if (courseId) {
      query = "SELECT * FROM sections WHERE course_id = $1 ORDER BY order_num ASC, id ASC";
      params = [Number(courseId)];
    }

    const result = await pool.query(query, params);
    res.status(200).json({
      success: true,
      count: result.rows.length,
      sections: result.rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteSection = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM sections WHERE id = $1 RETURNING id", [Number(id)]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Section not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Section deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};