const express = require("express");

const router = express.Router();

const {
  createSection,
  getSections,
  deleteSection,
} = require("../controllers/section.controller");

const { verifyToken, optionalAuth } = require("../middleware/auth.middleware");
const { checkRole } = require("../middleware/role.middleware");

// Public or authenticated sections retrieval
router.get("/", optionalAuth, getSections);

// Create section (Admin / Teacher)
router.post(
  "/create",
  verifyToken,
  checkRole("admin", "teacher"),
  createSection
);

// Delete section (Admin / Teacher)
router.delete(
  "/:id",
  verifyToken,
  checkRole("admin", "teacher"),
  deleteSection
);

module.exports = router;
