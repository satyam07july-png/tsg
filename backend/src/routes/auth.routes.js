const express = require("express");

const router = express.Router();

const passport = require("passport");

const {

  registerUser,

  loginUser,

} = require("../controllers/auth.controller");


// REGISTER

router.post("/register", registerUser);


// LOGIN

router.post("/login", loginUser);

// google authentication
router.get(

  "/google",

  passport.authenticate("google", {

    scope: ["profile", "email"],

  })

);

router.get(

  "/google/callback",

  (req, res, next) => {

    passport.authenticate(

      "google",

      (err, user) => {

        console.log("ERROR:", err);

        console.log("USER:", user);

        if (err) {

          return res.status(500).json({

            message: "Google Auth Failed",

            error: err.message,

          });

        }

        if (!user) {

          return res.status(401).json({

            message: "No User Found",

          });

        }

        return res.redirect(

          "http://localhost:5173/student"

        );

      }

    )(req, res, next);

  }

);

module.exports = router;