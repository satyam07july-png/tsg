const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// GET ALL STUDENTS
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM students ORDER BY id DESC"
    );

    res.json(result.rows);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }
});

// ADD STUDENT
router.post("/", async (req, res) => {

  try {

    const {
      student_id,
      password,
      name,
      email,
      phone,
      course,
      teacher,
      status
    } = req.body;

    const result = await pool.query(
      `
      INSERT INTO students
      (
        student_id,
        password,
        name,
        email,
        phone,
        course,
        teacher,
        status
      )
      VALUES
      ($1,$2,$3,$4,$5,$6,$7,$8)
      RETURNING *
      `,
      [
        student_id,
        password,
        name,
        email,
        phone,
        course,
        teacher,
        status || "Active"
      ]
    );

    res.status(201).json(
      result.rows[0]
    );

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Insert Error"
    });

  }

});

module.exports = router;