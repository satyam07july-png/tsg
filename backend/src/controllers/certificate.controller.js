const pool = require("../config/db");

exports.generateCertificate = async (req, res) => {
  try {
    const studentId = req.user.id;

    const { courseId } = req.body;

    const existing = await pool.query(
      `SELECT * FROM certificates
       WHERE student_id=$1
       AND course_id=$2`,
      [studentId, courseId]
    );

    if (existing.rows.length > 0) {
      return res.status(400).json({
        message: "Certificate already generated",
      });
    }

    const certificateCode =
      "CERT-" +
      Math.floor(Math.random() * 1000000);

    const certificate = await pool.query(
      `INSERT INTO certificates
      (student_id, course_id, certificate_code)
      VALUES ($1,$2,$3)
      RETURNING *`,
      [
        studentId,
        courseId,
        certificateCode,
      ]
    );

    res.status(201).json({
      success: true,
      certificate: certificate.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.verifyCertificate = async (req, res) => {
  try {
    const { code } = req.params;

    const certificate = await pool.query(
      `
      SELECT certificates.*, users.full_name, courses.title
      FROM certificates
      JOIN users
      ON certificates.student_id = users.id
      JOIN courses
      ON certificates.course_id = courses.id
      WHERE certificate_code=$1
      `,
      [code]
    );

    if (certificate.rows.length === 0) {
      return res.status(404).json({
        message: "Invalid certificate",
      });
    }

    res.status(200).json({
      success: true,
      certificate: certificate.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};