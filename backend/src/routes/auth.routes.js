const express = require("express");

const router = express.Router();

const jwt = require("jsonwebtoken");

// LOGIN ROUTE
router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    if (!email || !password) {

      return res.status(400).json({
        success: false,
        message: "Email and Password required",
      });

    }

    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "7d" }
    );

    res.status(200).json({

      success: true,

      message: "Login Success",

      token,

      user: {
        email,
        role: "student",
      },

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});

module.exports = router;