const pool = require("../config/db");

exports.createQuiz = async (req, res) => {
  try {
    const { title, courseId, course_id, passing_score, passingScore, questions } = req.body;
    const targetCourseId = courseId || course_id;

    if (!title || !targetCourseId) {
      return res.status(400).json({
        success: false,
        message: "Quiz title and courseId are required",
      });
    }

    const quiz = await pool.query(
      `INSERT INTO quizzes (title, course_id, passing_score)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [title, Number(targetCourseId), Number(passing_score || passingScore || 70)]
    );

    const createdQuiz = quiz.rows[0];

    // If questions array was provided in same request, insert them
    if (Array.isArray(questions) && questions.length > 0) {
      for (const q of questions) {
        if (q.question) {
          await pool.query(
            `INSERT INTO quiz_questions
             (quiz_id, question, option_a, option_b, option_c, option_d, correct_option)
             VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [
              createdQuiz.id,
              q.question,
              q.optionA || q.option_a || "",
              q.optionB || q.option_b || "",
              q.optionC || q.option_c || "",
              q.optionD || q.option_d || "",
              (q.correctOption || q.correct_option || "A").toUpperCase(),
            ]
          );
        }
      }
    }

    res.status(201).json({
      success: true,
      message: "Quiz created successfully",
      quiz: createdQuiz,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getQuizzes = async (req, res) => {
  try {
    const courseId = req.query.courseId || req.query.course_id;
    let query = "SELECT * FROM quizzes ORDER BY id DESC";
    let params = [];

    if (courseId) {
      query = "SELECT * FROM quizzes WHERE course_id = $1 ORDER BY id DESC";
      params = [Number(courseId)];
    }

    const quizRes = await pool.query(query, params);
    const quizzes = [];

    for (const q of quizRes.rows) {
      const qRes = await pool.query(
        "SELECT * FROM quiz_questions WHERE quiz_id = $1 ORDER BY id ASC",
        [q.id]
      );
      quizzes.push({
        ...q,
        questions: qRes.rows,
        total_questions: qRes.rows.length,
      });
    }

    res.status(200).json({
      success: true,
      count: quizzes.length,
      quizzes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteQuiz = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM quizzes WHERE id = $1 RETURNING id", [Number(id)]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Quiz deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
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