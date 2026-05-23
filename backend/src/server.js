require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// CONFIG
require("./config/db");

// ROUTES
const authRoutes = require("./routes/auth.routes");
const courseRoutes = require("./routes/course.routes");
const lectureRoutes = require("./routes/lecture.routes");

// MIDDLEWARE
app.use(express.json());

app.use(express.urlencoded({
  extended: true,
}));

// CORS
app.use(cors());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/lectures", lectureRoutes);

// ERROR
app.use((err, req, res, next) => {
  console.log(err);

  res.status(500).json({
    message: "Server Error",
  });
});

// PORT
const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on ${PORT}`
  );
});