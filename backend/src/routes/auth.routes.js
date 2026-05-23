const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");


// ==========================
// REGISTER USER
// ==========================

exports.registerUser =
  async (req, res) => {

    try {

      const {

        name,

        email,

        password,

      } = req.body;

      // VALIDATION

      if (

        !name ||

        !email ||

        !password

      ) {

        return res.status(400).json({

          success: false,

          message:
            "All fields are required",

        });

      }

      // HASH PASSWORD

      const hashedPassword =
        await bcrypt.hash(

          password,

          10

        );

      // RESPONSE

      res.status(201).json({

        success: true,

        message:
          "User Registered Successfully",

        user: {

          name,

          email,

          password:
            hashedPassword,

        },

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          "Registration Failed",

        error:
          error.message,

      });

    }

  };


// ==========================
// LOGIN USER
// ==========================

exports.loginUser =
  async (req, res) => {

    try {

      const {

        email,

        password,

      } = req.body;

      // VALIDATION

      if (

        !email ||

        !password

      ) {

        return res.status(400).json({

          success: false,

          message:
            "Email and Password required",

        });

      }

      // DUMMY TOKEN

      const token =
        jwt.sign(

          {

            email,

          },

          process.env.JWT_SECRET ||

            "secretkey",

          {

            expiresIn:
              "7d",

          }

        );

      // RESPONSE

      res.status(200).json({

        success: true,

        message:
          "Login Successful",

        token,

        user: {

          email,

        },

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          "Login Failed",

        error:
          error.message,

      });

    }

  };