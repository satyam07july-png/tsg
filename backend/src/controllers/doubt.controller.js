const pool = require("../config/db");


// ASK DOUBT

const askDoubt = async (req, res) => {

  try {

    const {

      student_id,

      teacher_id,

      question,

    } = req.body;

    const newDoubt = await pool.query(

      `INSERT INTO doubts

      (student_id, teacher_id, question)

      VALUES ($1, $2, $3)

      RETURNING *`,

      [

        student_id,

        teacher_id,

        question,

      ]

    );

    res.status(201).json({

      message: "Doubt Submitted",

      doubt: newDoubt.rows[0],

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

};


// GET STUDENT DOUBTS

const getStudentDoubts = async (req, res) => {

  try {

    const { studentId } = req.params;

    const doubts = await pool.query(

      `SELECT * FROM doubts

       WHERE student_id = $1

       ORDER BY created_at DESC`,

      [studentId]

    );

    res.status(200).json(

      doubts.rows

    );

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

};


// TEACHER REPLY

const replyDoubt = async (req, res) => {

  try {

    const { id } = req.params;

    const { answer } = req.body;

    await pool.query(

      `UPDATE doubts

       SET answer = $1,

       status = 'Answered'

       WHERE id = $2`,

      [answer, id]

    );

    res.status(200).json({

      message: "Reply Submitted",

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

};


module.exports = {

  askDoubt,

  getStudentDoubts,

  replyDoubt,

};