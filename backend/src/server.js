require("dotenv").config();

const express = require("express");

const cors = require("cors");

const session = require("express-session");

const helmet = require("helmet");

const passport = require("passport");


// ==========================
// APP
// ==========================

const app = express();


// ==========================
// CONFIG
// ==========================

require("./config/db");

require("./config/passport");


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
// MIDDLEWARES
// ==========================

app.use(express.json());

app.use(express.urlencoded({
  extended: true,
}));


// ==========================
// CORS
// ==========================

app.use(

  cors({

    origin: [

      "http://localhost:5173",

      "https://dizitaladda.vercel.app",

    ],

    credentials: true,

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
// HEALTH CHECK
// ==========================

app.get("/", (req, res) => {

  res.send(

    "LMS Backend Running 🚀"

  );

});


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
// ERROR HANDLER
// ==========================

app.use(

  (err, req, res, next) => {

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
// PORT
// ==========================

const PORT =

  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(

    `Server running on port ${PORT}`

  );

});