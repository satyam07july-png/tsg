const bcrypt =
  require("bcryptjs");

const jwt =
  require("jsonwebtoken");


// ==========================
// REGISTER USER
// ==========================

const registerUser =
  async (req, res) => {

    try {

      const {

        name,

        email,

        password,

      } = req.body;

      if (

        !name ||

        !email ||

        !password

      ) {

        return res.status(400).json({

          success: false,

          message:
            "All fields required",

        });

      }

      const hashedPassword =
        await bcrypt.hash(

          password,

          10

        );

      res.status(201).json({

        success: true,

        message:
          "Register Success",

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
          error.message,

      });

    }

  };


// ==========================
// LOGIN USER
// ==========================

const loginUser =
  async (req, res) => {

    try {

      const {

        email,

        password,

      } = req.body;

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

      res.status(200).json({

        success: true,

        message:
          "Login Success",

        token,

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

  };


// ==========================
// EXPORTS
// ==========================

module.exports = {

  registerUser,

  loginUser,

};