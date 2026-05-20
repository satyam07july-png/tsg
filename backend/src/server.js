require("dotenv").config();

const express = require("express");

const cors = require("cors");

const session = require("express-session");

const helmet = require("helmet");

const passport = require("passport");

const authRoutes = require("./routes/auth.routes");

const courseRoutes = require("./routes/course.routes");

const activityRoutes = require("./routes/activity.routes");

const progressRoutes = require("./routes/progress.routes");

const doubtRoutes = require("./routes/doubt.routes");

const paymentRoutes = require("./routes/payment.routes");

const aiRoutes = require("./routes/ai.routes");

const adminRoutes = require("./routes/admin.routes");

const lectureRoutes = require("./routes/lecture.routes");

require("./config/db");

require("./config/passport");

const app = express();


// ==========================
// MIDDLEWARES
// ==========================

app.use(express.json());


// CORS FIX

app.use(
  cors({
    origin: "https://dizitaladda.vercel.app",
    methods: [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "OPTIONS"
    ],
    allowedHeaders: [
      "Content-Type",
      "Authorization"
    ],
    credentials: true,
  })
);

// PREFLIGHT FIX

app.options("*", cors());


// SESSION

app.use(

  session({

    secret: "lmssecret",

    resave: false,

    saveUninitialized: false,

  })

);


// PASSPORT

app.use(passport.initialize());

app.use(passport.session());


// HELMET

app.use(

  helmet({

    contentSecurityPolicy: false,

  })

);


// ==========================
// ROUTES
// ==========================

app.use("/api/auth", authRoutes);

app.use("/api/courses", courseRoutes);

app.use("/api/activities", activityRoutes);

app.use("/api/progress", progressRoutes);

app.use("/api/doubts", doubtRoutes);

app.use("/api/payment", paymentRoutes);

app.use("/api/ai", aiRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/lectures", lectureRoutes);


// ==========================
// HEALTH CHECK
// ==========================

app.get("/", (req, res) => {

  res.send("LMS Backend Running 🚀");

});


// DEVTOOLS FIX

app.get(

  "/.well-known/appspecific/com.chrome.devtools.json",

  (req, res) => {

    res.status(204).send();

  }

);


// ==========================
// SERVER
// ==========================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});