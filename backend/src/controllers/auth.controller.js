const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const pool = require("../config/db");


// LOGIN USER

const loginUser = async (req, res) => {

  console.log(req.body);

  try {

    const {

      email,

      password

    } = req.body;

    // FIND USER

    const user = await pool.query(

      `
      SELECT * FROM users
      WHERE email = $1
      `,

      [email]

    );

    // USER NOT FOUND

    if (user.rows.length === 0) {

      return res.status(400).json({

        message: "User not found",

      });

    }

    const existingUser = user.rows[0];

    // CHECK PASSWORD

    const isMatch = await bcrypt.compare(

      String(password),

      String(existingUser.password)

    );

    // INVALID PASSWORD

    if (!isMatch) {

      return res.status(400).json({

        message: "Invalid Password",

      });

    }

    // JWT TOKEN

    const token = jwt.sign(

      {

        id: existingUser.id,

        role: existingUser.role,

      },

      "lmssecret",

      {

        expiresIn: "7d",

      }

    );

    // SUCCESS RESPONSE

    res.status(200).json({

      message: "Login Successful",

      token,

      user: {

        id: existingUser.id,

        name: existingUser.name,

        email: existingUser.email,

        role: existingUser.role,

      },

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

};


// EXPORTS

module.exports = {

  loginUser,

};