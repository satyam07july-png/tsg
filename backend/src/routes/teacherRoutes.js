const express = require("express");
const router = express.Router();
const pool = require("../config/db");

router.get("/", async (req, res) => {

  try {

    const teachers = await pool.query(`
      SELECT id, name
      FROM users
      WHERE role = 'teacher'
      ORDER BY name
    `);

    res.json(teachers.rows);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Error fetching teachers"
    });

  }

});

module.exports = router;