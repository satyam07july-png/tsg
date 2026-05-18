const express = require("express");

const router = express.Router();

const {

  askDoubt,

  getStudentDoubts,

  replyDoubt,

} = require("../controllers/doubt.controller");


// ASK

router.post("/", askDoubt);


// GET STUDENT DOUBTS

router.get("/:studentId", getStudentDoubts);


// REPLY

router.put("/:id", replyDoubt);


module.exports = router;