const express = require("express");
const router = express.Router();
const {
  createOrder,
  verifyPayment,
  getPaymentHistory,
} = require("../controllers/payment.controller");
const { verifyToken, optionalAuth } = require("../middleware/auth.middleware");

// Create Razorpay order (Authenticated or guest)
router.post("/create-order", optionalAuth, createOrder);

// Verify signature and activate enrollment (Authenticated or guest enrollment)
router.post("/verify-payment", optionalAuth, verifyPayment);

// Payment history for user or admin
router.get("/history", verifyToken, getPaymentHistory);

module.exports = router;