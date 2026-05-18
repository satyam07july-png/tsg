const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Dizital Adda LMS API Running");
});
/*============== user routes ==============*/
const userRoutes = require("./routes/user.routes");

app.use("/api/user", userRoutes);

/*============== Admin routes ==============*/
const adminRoutes = require("./routes/admin.routes");

app.use("/api/admin", adminRoutes);

/*============== Course routes ==============*/
const courseRoutes = require("./routes/course.routes");

app.use("/api/courses", courseRoutes);

/*============== Section & lecture routes ==============*/
const sectionRoutes = require("./routes/section.routes");
const lectureRoutes = require("./routes/lecture.routes");

app.use("/api/sections", sectionRoutes);
app.use("/api/lectures", lectureRoutes);

/*============== Enrollment routes ==============*/
const enrollmentRoutes = require("./routes/enrollment.routes");

app.use("/api/enrollments", enrollmentRoutes);

/*============== progrees routes ==============*/
const progressRoutes = require("./routes/progress.routes");

app.use("/api/progress", progressRoutes);

/*============== quize routes ==============*/
const quizRoutes = require("./routes/quiz.routes");

app.use("/api/quizzes", quizRoutes);

/*============== assigment routaes ==============*/
const assignmentRoutes = require("./routes/assignment.routes");

app.use("/api/assignments", assignmentRoutes);
/*============== certificate routaes ==============*/
const certificateRoutes = require("./routes/certificate.routes");

app.use("/api/certificates", certificateRoutes);
/*============== payment  routaes ==============*/
const paymentRoutes = require("./routes/payment.routes");

app.use("/api/payments", paymentRoutes);

module.exports = app;