require("dotenv").config();

const express = require("express");

const cors = require("cors");

const session = require("express-session");

const helmet = require("helmet");

const passport = require("passport");


// ==========================
// ROUTES
// ==========================

const authRoutes =
  require("./routes/auth.routes");

const courseRoutes =
  require("./routes/course.routes");

const lectureRoutes =
  require("./routes/lecture.routes");


// ==========================
// CONFIG
// ==========================

require("./config/db");

require("./config/passport");


const app = express();


// ==========================
// MIDDLEWARES
// ==========================

// JSON

app.use(express.json());


// ==========================
// CORS
// ==========================

const allowedOrigins = [

  "https://dizitaladda.vercel.app",

  "http://localhost:5173",

];

app.use(

  cors({

    origin: function (

      origin,

      callback

    ) {

      // POSTMAN / MOBILE

      if (!origin) {

        return callback(
          null,
          true
        );

      }

      // ALLOW ORIGINS

      if (

        allowedOrigins.includes(
          origin
        )

      ) {

        return callback(
          null,
          true
        );

      }

      // BLOCK OTHER ORIGINS

      return callback(

        new Error(
          "CORS Not Allowed"
        )

      );

    },

    credentials: true,

    methods: [

      "GET",

      "POST",

      "PUT",

      "DELETE",

      "OPTIONS",

    ],

    allowedHeaders: [

      "Content-Type",

      "Authorization",

    ],

  })

);


// ==========================
// SESSION
// ==========================

app.use(

  session({

    secret:

      process.env.SESSION_SECRET ||

      "lmssecret",

    resave: false,

    saveUninitialized: false,

    cookie: {

      secure: true,

      sameSite: "none",

    },

  })

);


// ==========================
// PASSPORT
// ==========================

app.use(
  passport.initialize()
);

app.use(
  passport.session()
);


// ==========================
// HELMET
// ==========================

app.use(

  helmet({

    contentSecurityPolicy: false,

  })

);


// ==========================
// ROUTES
// ==========================

app.use(

  "/api/auth",

  authRoutes

);

app.use(

  "/api/courses",

  courseRoutes

);

app.use(

  "/api/lectures",

  lectureRoutes

);


// ==========================
// HEALTH CHECK
// ==========================

app.get("/", (req, res) => {

  res.send(

    "LMS Backend Running 🚀"

  );

});


// ==========================
// DEVTOOLS FIX
// ==========================

app.get(

  "/.well-known/appspecific/com.chrome.devtools.json",

  (req, res) => {

    res.status(204).send();

  }

);


// ==========================
// GLOBAL ERROR HANDLER
// ==========================

app.use(

  (

    err,

    req,

    res,

    next

  ) => {

    console.log(
      "SERVER ERROR:",
      err
    );

    res.status(500).json({

      success: false,

      message:

        err.message ||

        "Internal Server Error",

    });

  }

);


// ==========================
// SERVER
// ==========================

const PORT =

  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(

    `Server running on port ${PORT}`

  );

});