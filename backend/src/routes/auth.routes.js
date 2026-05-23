router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    if (!email || !password) {

      return res.status(400).json({
        success: false,
        message: "Email and Password required",
      });

    }

    // ROLE CHECK

    let role = "student";

    if (
      email === "admin@gmail.com"
    ) {

      role = "admin";

    }

    else if (
      email === "teacher@gmail.com"
    ) {

      role = "teacher";

    }

    const token = jwt.sign(

      {
        email,
        role,
      },

      "secretkey",

      {
        expiresIn: "7d",
      }

    );

    res.status(200).json({

      success: true,

      message: "Login Success",

      token,

      user: {
        email,
        role,
      },

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});