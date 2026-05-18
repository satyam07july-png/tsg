const express = require("express");

const router = express.Router();

const {
  generateCertificate,
  verifyCertificate,
} = require("../controllers/certificate.controller");

const { verifyToken } = require("../middleware/auth.middleware");

router.post(
  "/generate",
  verifyToken,
  generateCertificate
);

router.get(
  "/verify/:code",
  verifyCertificate
);

module.exports = router;