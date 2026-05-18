const pool = require("../config/db");

exports.createQuiz = async (req, res) => {
  try {
    const { title, courseId } = req.body;

    const quiz = await pool.query(
      `INSERT INTO quizzes
      (title, course_id)
      VALUES ($1,$2)
      RETURNING *`,
      [title, courseId]
    );

    res.status(201).json({
      success: true,
      quiz: quiz.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.addQuestion = async (req, res) => {
  try {
    const {
      quizId,
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      correctOption,
    } = req.body;

    const newQuestion = await pool.query(
      `INSERT INTO quiz_questions
      (quiz_id, question, option_a, option_b, option_c, option_d, correct_option)
      VALUES ($1,$2,$3,$4,$5,$6,$7)
      RETURNING *`,
      [
        quizId,
        question,
        optionA,
        optionB,
        optionC,
        optionD,
        correctOption,
      ]
    );

    res.status(201).json({
      success: true,
      question: newQuestion.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.submitQuiz = async (req, res) => {
  try {
    const studentId = req.user.id;

    const { quizId, answers } = req.body;

    const questions = await pool.query(
      `SELECT * FROM quiz_questions
       WHERE quiz_id=$1`,
      [quizId]
    );

    let score = 0;

    questions.rows.forEach((question) => {
      const studentAnswer =
        answers[question.id];

      if (
        studentAnswer ===
        question.correct_option
      ) {
        score++;
      }
    });

    const attempt = await pool.query(
      `INSERT INTO quiz_attempts
      (student_id, quiz_id, score)
      VALUES ($1,$2,$3)
      RETURNING *`,
      [studentId, quizId, score]
    );

    res.status(200).json({
      success: true,
      score,
      totalQuestions: questions.rows.length,
      attempt: attempt.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};