const express = require("express");

const router = express.Router();

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const pool = require("../config/db");

// LOGIN
router.post("/login", async (req, res) => {

  try {

    const {
      email,
      password,
    } = req.body;

    // FIND USER

    const userQuery =
      await pool.query(

        "SELECT * FROM users WHERE email = $1",

        [email]

      );

    // USER NOT FOUND

    if (
      userQuery.rows.length === 0
    ) {

      return res.status(404).json({

        success: false,

        message: "User not found",

      });

    }

    const user =
      userQuery.rows[0];

    // PASSWORD CHECK

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {

      return res.status(400).json({

        success: false,

        message:
          "Invalid password",

      });

    }

    // TOKEN

    const token =
      jwt.sign(

        {
          id: user.id,
          role: user.role,
        },

        process.env.JWT_SECRET ||
        "secretkey",

        {
          expiresIn: "7d",
        }

      );

    // RESPONSE

    res.status(200).json({

      success: true,

      message:
        "Login Success",

      token,

      user: {

        id: user.id,

        name: user.name,

        email: user.email,

        role: user.role,

      },

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

});

module.exports = router;