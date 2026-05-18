const express = require("express");

const router = express.Router();

const {
  createQuiz,
  addQuestion,
  submitQuiz,
} = require("../controllers/quiz.controller");

const { verifyToken } = require("../middleware/auth.middleware");

const { checkRole } = require("../middleware/role.middleware");

router.post(
  "/create",
  verifyToken,
  checkRole("admin", "teacher"),
  createQuiz
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