require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// ==========================
// DATABASE
// ==========================

require("./config/db");

// ==========================
// ROUTES IMPORT
// ==========================

const authRoutes =
  require("./routes/auth.routes");

const courseRoutes =
  require("./routes/course.routes");

const lectureRoutes =
  require("./routes/lecture.routes");

const adminRoutes =
  require("./routes/admin.routes");

// ==========================
// MIDDLEWARE
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

app.use(
  cors({
    origin:
      "https://tsg-ecru.vercel.app",

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
// TEST ROUTES
// ==========================

app.get("/", (req, res) => {

  res.send(
    "LMS Backend Running 🚀"
  );

});

// ADMIN TEST ROUTE

app.get(
  "/api/admin/test",
  (req, res) => {

    res.json({

      message:
        "Admin route working 🚀",

    });

  }
);

// ==========================
// API ROUTES
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

app.use(
  "/api/admin",
  adminRoutes
);

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
    `🚀 Server running on port ${PORT}`
  );

});