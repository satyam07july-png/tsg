require("dotenv").config();

const express = require("express");
const cors = require("cors");
const session = require("express-session");
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
// ROUTES IMPORT
// ==========================

const authRoutes = require("./routes/auth.routes");
const courseRoutes = require("./routes/course.routes");
const lectureRoutes = require("./routes/lecture.routes");

// ==========================
// MIDDLEWARES
// ==========================

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// ==========================
// CORS
// ==========================

// TEMPORARY OPEN CORS
// FOR VERCEL + RENDER

app.use(cors());

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
      secure: false,
      httpOnly: true,
    },
  })
);

// ==========================
// PASSPORT
// ==========================

app.use(passport.initialize());

app.use(passport.session());

// ==========================
// HEALTH CHECK
// ==========================

app.get("/", (req, res) => {
  res.send("LMS Backend Running 🚀");
});

// ==========================
// API ROUTES
// ==========================

app.use("/api/auth", authRoutes);
console.log("✅ Auth Routes Loaded");

app.use("/api/courses", courseRoutes);
console.log("✅ Course Routes Loaded");

app.use("/api/lectures", lectureRoutes);
console.log("✅ Lecture Routes Loaded");

// ==========================
// 404 ROUTE
// ==========================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// ==========================
// ERROR HANDLER
// ==========================

app.use((err, req, res, next) => {
  console.log("SERVER ERROR:", err);

  res.status(500).json({
    success: false,
    message:
      err.message ||
      "Internal Server Error",
  });
});

// ==========================
// PORT
// ==========================

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on port ${PORT}`
  );
});