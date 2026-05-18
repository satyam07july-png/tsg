const express = require("express");

const router = express.Router();

const {

  getStudentProgress,

} = require("../controllers/progress.controller");

router.get("/:studentId", getStudentProgress);

module.exports = router;