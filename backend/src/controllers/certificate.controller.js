const pool = require("../config/db");

// ==========================================
// 1. GENERATE CERTIFICATE
// ==========================================
exports.generateCertificate = async (req, res, next) => {
  try {
    const studentId = req.user.id;
    const { courseId } = req.body;

    if (!courseId) {
      return res.status(400).json({
        success: false,
        message: "courseId is required",
      });
    }

    const existing = await pool.query(
      `SELECT * FROM certificates
       WHERE student_id = $1 AND course_id = $2`,
      [studentId, courseId]
    );

    if (existing.rows.length > 0) {
      return res.status(200).json({
        success: true,
        message: "Certificate already issued",
        certificate: existing.rows[0],
      });
    }

    const certificateCode = `CERT-${Date.now().toString().slice(-6)}-${Math.floor(1000 + Math.random() * 9000)}`;

    const certificate = await pool.query(
      `INSERT INTO certificates
       (student_id, course_id, certificate_code)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [studentId, courseId, certificateCode]
    );

    res.status(201).json({
      success: true,
      message: "Certificate generated successfully 🎉",
      certificate: certificate.rows[0],
    });
  } catch (error) {
    next(error);
  }
};

// ==========================================
// 2. VERIFY CERTIFICATE (Public)
// ==========================================
exports.verifyCertificate = async (req, res, next) => {
  try {
    const { code } = req.params;

    const certificate = await pool.query(
      `
      SELECT
        certificates.*,
        users.name AS student_name,
        users.email AS student_email,
        courses.title AS course_title
      FROM certificates
      JOIN users ON certificates.student_id = users.id
      JOIN courses ON certificates.course_id = courses.id
      WHERE certificate_code = $1
      `,
      [code]
    );

    if (certificate.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Certificate not found or invalid certificate code",
      });
    }

    res.status(200).json({
      success: true,
      valid: true,
      certificate: certificate.rows[0],
    });
  } catch (error) {
    next(error);
  }
};