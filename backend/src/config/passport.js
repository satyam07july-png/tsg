const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

const pool = require("../config/db");

passport.use(

  new GoogleStrategy(

    {

      clientID: process.env.GOOGLE_CLIENT_ID,

      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

      callbackURL:
        "http://https://https://dizitaladda.onrender.com/api/auth/google/callback",

    },

    async (accessToken, refreshToken, profile, done) => {

      try {

        const email = profile.emails[0].value;

        // CHECK USER

        const userExists = await pool.query(

          "SELECT * FROM users WHERE email = $1",

          [email]

        );

        if (userExists.rows.length > 0) {

          return done(null, userExists.rows[0]);

        }

        // CREATE USER

        const newUser = await pool.query(

          `INSERT INTO users
          (full_name, email, phone, password, role)

          VALUES ($1, $2, $3, $4, $5)

          RETURNING *`,

          [

            profile.displayName,

            email,

            "0000000000",

            "googleauth123",

            "student",

          ]

        );

        return done(null, newUser.rows[0]);

      }

      catch (error) {

        console.log(error);

        return done(error, null);

      }

    }

  )

);

passport.serializeUser((user, done) => {

  done(null, user.id);

});

passport.deserializeUser(async (id, done) => {

  try {

    const user = await pool.query(

      "SELECT * FROM users WHERE id = $1",

      [id]

    );

    done(null, user.rows[0]);

  }

  catch (error) {

    done(error, null);

  }

});