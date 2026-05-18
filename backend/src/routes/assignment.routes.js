const express = require("express");

const router = express.Router();

const {
  createAssignment,
  submitAssignment,
  reviewSubmission,
} = require("../controllers/assignment.controller");

const { verifyToken } = require("../middleware/auth.middleware");

const { checkRole } = require("../middleware/role.middleware");

router.post(
  "/create",
  verifyToken,
  checkRole("admin", "teacher"),
  createAssignment
);

router.post(
  "/submit",
  verifyToken,
  submitAssignment
);

router.put(
  "/review",
  verifyToken,
  checkRole("admin", "teacher"),
  reviewSubmission
);

module.exports = router;
