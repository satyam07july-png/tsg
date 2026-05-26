const express = require("express");

const router = express.Router();

const {
  verifyToken,
} = require("../middleware/auth.middleware");

const {
  checkRole,
} = require("../middleware/role.middleware");

const pool =
  require("../config/db");

const bcrypt =
  require("bcryptjs");

const {
  getDashboardAnalytics,
} = require("../controllers/admin.controller");

// ==========================
// ADMIN DASHBOARD
// ==========================

router.get(
  "/dashboard",
  verifyToken,
  checkRole("admin"),
  (req, res) => {

    res.json({

      message:
        "Welcome Admin 🚀",

    });

  }
);

// ==========================
// GET ALL TEACHERS
// ==========================

router.get(
  "/teachers",
  async (req, res) => {

    try {

      const teachers =
        await pool.query(

          `
          SELECT *
          FROM users
          WHERE role = 'teacher'
          ORDER BY id DESC
          `

        );

      res.status(200).json({

        success: true,

        teachers:
          teachers.rows,

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

  }
);

// ==========================
// ADD TEACHER
// ==========================

router.post(
  "/add-teacher",
  async (req, res) => {

    try {

      console.log(req.body);

      const {

        name,
        email,
        password,
        phone,
        specialization,

      } = req.body;

      // CHECK EXISTING USER

      const existingUser =
        await pool.query(

          `
          SELECT *
          FROM users
          WHERE email = $1
          `,

          [email]

        );

      if (
        existingUser.rows.length > 0
      ) {

        return res.status(400).json({

          success: false,

          message:
            "Teacher already exists",

        });

      }

      // HASH PASSWORD

      const hashedPassword =
        await bcrypt.hash(
          password,
          10
        );

      // INSERT TEACHER

      await pool.query(

        `
        INSERT INTO users
        (
          name,
          email,
          password,
          role,
          phone,
          specialization
        )

        VALUES ($1,$2,$3,$4,$5,$6)
        `,

        [
          name,
          email,
          hashedPassword,
          "teacher",
          phone,
          specialization,
        ]

      );

      res.status(200).json({

        success: true,

        message:
          "Teacher Added Successfully 🚀",

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

  }
);

// ==========================
// ADD COURSE
// ==========================

router.post(
  "/add-course",
  async (req, res) => {

    try {

      const {

        title,
        description,
        price,
        duration,
        teacher,
        thumbnail,

      } = req.body;

      await pool.query(

        `
        INSERT INTO courses
        (
          title,
          description,
          price,
          duration,
          teacher,
          thumbnail
        )

        VALUES ($1,$2,$3,$4,$5,$6)
        `,

        [
          title,
          description,
          price,
          duration,
          teacher,
          thumbnail,
        ]

      );

      res.status(200).json({

        success: true,

        message:
          "Course Added Successfully 🚀",

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

  }
);

// ==========================
// UPDATE PASSWORD
// ==========================

router.put(
  "/update-password",
  async (req, res) => {

    try {

      const {

        email,
        currentPassword,
        newPassword,

      } = req.body;

      // FIND USER

      const user =
        await pool.query(

          `
          SELECT *
          FROM users
          WHERE email = $1
          `,

          [email]

        );

      if (
        user.rows.length === 0
      ) {

        return res.status(404).json({

          success: false,

          message:
            "User not found",

        });

      }

      const existingUser =
        user.rows[0];

      // CHECK PASSWORD

      const isMatch =
        await bcrypt.compare(

          currentPassword,

          existingUser.password

        );

      if (!isMatch) {

        return res.status(400).json({

          success: false,

          message:
            "Current password incorrect",

        });

      }

      // HASH NEW PASSWORD

      const hashedPassword =
        await bcrypt.hash(
          newPassword,
          10
        );

      // UPDATE PASSWORD

      await pool.query(

        `
        UPDATE users
        SET password = $1
        WHERE email = $2
        `,

        [
          hashedPassword,
          email,
        ]

      );

      res.status(200).json({

        success: true,

        message:
          "Password updated successfully 🚀",

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          "Server Error",

      });

    }

  }
);

// ==========================
// DELETE COURSE
// ==========================

router.delete(
  "/delete-course/:id",
  async (req, res) => {

    try {

      const { id } =
        req.params;

      await pool.query(

        `
        DELETE FROM courses
        WHERE id = $1
        `,

        [id]

      );

      res.status(200).json({

        success: true,

        message:
          "Course Deleted Successfully 🚀",

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

  }
);

// ==========================
// EDIT COURSE
// ==========================

router.put(
  "/edit-course/:id",
  async (req, res) => {

    try {

      const { id } =
        req.params;

      const {

        title,
        description,
        price,
        duration,
        teacher,
        thumbnail,

      } = req.body;

      await pool.query(

        `
        UPDATE courses

        SET

        title = $1,
        description = $2,
        price = $3,
        duration = $4,
        teacher = $5,
        thumbnail = $6

        WHERE id = $7
        `,

        [
          title,
          description,
          price,
          duration,
          teacher,
          thumbnail,
          id,
        ]

      );

      res.status(200).json({

        success: true,

        message:
          "Course Updated Successfully 🚀",

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,
        message:
          error.message,

      });

    }

  }
);

module.exports = router;