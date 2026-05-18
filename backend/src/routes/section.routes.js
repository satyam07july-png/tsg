const express = require("express");

const router = express.Router();

const {
  createSection,
} = require("../controllers/section.controller");

const { verifyToken } = require("../middleware/auth.middleware");

const { checkRole } = require("../middleware/role.middleware");

router.post(
  "/create",
  verifyToken,
  checkRole("admin", "teacher"),
  createSection
);

module.exports = router;
