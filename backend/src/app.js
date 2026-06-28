require("dotenv").config();

const express = require("express");
const cors = require("cors");

require("./config/db");

const activityRoutes = require("./routes/activity.routes");
const adminDashboardRoutes = require("./routes/adminDashboardRoutes");
const adminRoutes = require("./routes/admin.routes");
const aiRoutes = require("./routes/ai.routes");
const assignmentRoutes = require("./routes/assignment.routes");
const authRoutes = require("./routes/auth.routes");
const certificateRoutes = require("./routes/certificate.routes");
const courseRoutes = require("./routes/course.routes");
const doubtRoutes = require("./routes/doubt.routes");
const enrollmentRoutes = require("./routes/enrollment.routes");
const lectureRoutes = require("./routes/lecture.routes");
const paymentRoutes = require("./routes/payment.routes");
const progressRoutes = require("./routes/progress.routes");
const quizRoutes = require("./routes/quiz.routes");
const sectionRoutes = require("./routes/section.routes");
const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const userRoutes = require("./routes/user.routes");

const app = express();

const allowedOrigins = [
  
  "https://tsg-ecru.vercel.app",
  "https://tsg-qlb1.onrender.com",];

app.use(
  cors({
    origin: (origin, callback) => {
      console.log("Incoming Origin:", origin);
      console.log("Incoming Origin:", origin);
console.log("Blocked Origin:", origin);

      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("Blocked Origin:", origin);

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json({ limit: process.env.JSON_BODY_LIMIT || "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Dizital Adda LMS API Running");
});

app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "API healthy" });
});

app.use("/api/activity", activityRoutes);
app.use("/api/admin/analytics", adminDashboardRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/doubts", doubtRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/lectures", lectureRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/sections", sectionRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/user", userRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
