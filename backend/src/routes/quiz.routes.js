const express = require("express");

const router = express.Router();

const {
  createQuiz,
  getQuizzes,
  deleteQuiz,
  addQuestion,
  submitQuiz,
} = require("../controllers/quiz.controller");

const { verifyToken, optionalAuth } = require("../middleware/auth.middleware");
const { checkRole } = require("../middleware/role.middleware");

// Get quizzes (Public or enrolled student check, courseId filter)
router.get("/", optionalAuth, getQuizzes);

router.post(
  "/create",
  verifyToken,
  checkRole("admin", "teacher"),
  createQuiz
);

router.delete(
  "/:id",
  verifyToken,
  checkRole("admin", "teacher"),
  deleteQuiz
);

router.post(
  "/question/add",
  verifyToken,
  checkRole("admin", "teacher"),
  addQuestion
);

router.post(
  "/submit",
  verifyToken,
  submitQuiz
);

module.exports = router;