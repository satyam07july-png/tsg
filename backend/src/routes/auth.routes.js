const express = require("express");

const router = express.Router();

const passport = require("passport");

const {

  registerUser,

  loginUser,

} = require(
  "../controllers/auth.controller"
);


// ==========================
// REGISTER
// ==========================

router.post(
  "/register",
  registerUser
);


// ==========================
// LOGIN
// ==========================

router.post(
  "/login",
  loginUser
);


// ==========================
// GOOGLE AUTH
// ==========================

router.get(

  "/google",

  passport.authenticate(

    "google",

    {

      scope: [

        "profile",

        "email",

      ],

    }

  )

);


// ==========================
// GOOGLE CALLBACK
// ==========================

router.get(

  "/google/callback",

  passport.authenticate(

    "google",

    {

      failureRedirect:
        "/login",

      session: true,

    }

  ),

  (req, res) => {

    res.redirect(

      "http://localhost:5173/student"

    );

  }

);


// ==========================
// EXPORT
// ==========================

module.exports = router;