const express = require("express");

const router = express.Router();

const { verifyToken } = require("../middleware/auth.middleware");

const { checkRole } = require("../middleware/role.middleware");
const pool = require("../config/db");
const bcrypt = require("bcrypt");


const {
  getDashboardAnalytics,
} = require("../controllers/admin.controller");

router.get(
  "/dashboard",
  verifyToken,
  checkRole("admin"),
  (req, res) => {

    res.json({
      message: "Welcome Admin",
    });

  }
);

router.post(
  "/add-teacher",
  async (req, res) => {
    console.log(req.body);

    try {

      const {
        name,
        email,
        password,
        phone,
      } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
      await pool.query(

        `
        INSERT INTO users
        (
          full_name,
          email,
          password,
          role,
          phone
        )

        VALUES ($1,$2,$3,$4,$5)
        `,

        [
          name,
          email,
          hashedPassword,
          "teacher",
          phone,
        ]

      );

      res.status(200).json({

        success: true,

        message: "Teacher Added Successfully 🚀",

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        error: error.message,
      });

    }

  }
);

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

        message: "Course Added Successfully 🚀",

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message: error.message,

      });

    }

  }
);

router.put("/update-password", async (req, res) => {

  try {

    const {

      email,

      currentPassword,

      newPassword,

    } = req.body;

    console.log(req.body);

    // FIND USER
    const user = await pool.query(

      "SELECT * FROM users WHERE email = $1",

      [email]

    );

    if (user.rows.length === 0) {

      return res.status(404).json({

        message: "User not found",

      });

    }

    // USER DATA
    const existingUser = user.rows[0];

    console.log(existingUser);

    // CHECK PASSWORD
    if (existingUser.password !== currentPassword) {

      return res.status(400).json({

        message: "Current password incorrect",

      });

    }

    // UPDATE PASSWORD
    await pool.query(

      `
      UPDATE users
      SET password = $1
      WHERE email = $2
      `,

      [newPassword, email]

    );

    res.status(200).json({

      success: true,

      message: "Password updated successfully 🚀",

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

});
router.delete(
  "/delete-course/:id",
  async (req, res) => {

    try {

      const { id } = req.params;

      await pool.query(

        `
        DELETE FROM courses
        WHERE id = $1
        `,

        [id]

      );

      res.status(200).json({

        success: true,

        message: "Course Deleted Successfully 🚀",

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message: error.message,

      });

    }

  }
);
router.put(
  "/edit-course/:id",
  async (req, res) => {

    try {

      const { id } = req.params;

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

        message: "Course Updated Successfully 🚀",

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message: error.message,

      });

    }

  }
);



module.exports = router;