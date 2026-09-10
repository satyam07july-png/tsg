const express = require("express");
const router = express.Router();
const { loginUser, registerUser, getMe } = require("../controllers/auth.controller");
const { verifyToken } = require("../middleware/auth.middleware");

// Public Auth Endpoints
router.post("/login", loginUser);
router.post("/register", registerUser);

// Protected Auth Endpoints
router.get("/me", verifyToken, getMe);

module.exports = router;
