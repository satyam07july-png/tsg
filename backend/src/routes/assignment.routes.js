const express = require("express");

const router = express.Router();

const {
  createAssignment,
  getAssignments,
  deleteAssignment,
  submitAssignment,
  reviewSubmission,
} = require("../controllers/assignment.controller");

const { verifyToken, optionalAuth } = require("../middleware/auth.middleware");
const { checkRole } = require("../middleware/role.middleware");

// Get assignments (filtered by courseId if query param present)
router.get("/", optionalAuth, getAssignments);

router.post(
  "/create",
  verifyToken,
  checkRole("admin", "teacher"),
  createAssignment
);

router.delete(
  "/:id",
  verifyToken,
  checkRole("admin", "teacher"),
  deleteAssignment
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
