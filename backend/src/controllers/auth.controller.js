const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const pool = require("../config/db");


// REGISTER USER

const registerUser = async (req, res) => {

  console.log(req.body);

  try {

    const {

      name,

      email,

      phone,

      password

    } = req.body;

    // ONLY STUDENT SIGNUP

    const userRole = "student";

    // CHECK USER

    const userExists = await pool.query(

      "SELECT * FROM users WHERE email = $1",

      [email]

    );

    if (userExists.rows.length > 0) {

      return res.status(400).json({

        message: "User already exists",

      });

    }

    // HASH PASSWORD

    const hashedPassword = await bcrypt.hash(

      password,

      10

    );

    // INSERT USER

    const newUser = await pool.query(

      `
      INSERT INTO users
      (
        name,
        email,
        phone,
        password,
        role
      )

      VALUES ($1, $2, $3, $4, $5)

      RETURNING *
      `,

      [

        name,

        email,

        phone,

        hashedPassword,

        userRole

      ]

    );

    res.status(201).json({

      message: "Registration Successful",

      user: newUser.rows[0],

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

};


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

    console.log(user.rows);

    // USER NOT FOUND

    if (user.rows.length === 0) {

      return res.status(400).json({

        message: "User not found",

      });

    }

    const existingUser = user.rows[0];

    // CHECK PASSWORD

    const isMatch = await bcrypt.compare(

      password,

      existingUser.password

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

  registerUser,

  loginUser,

};