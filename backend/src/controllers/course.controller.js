const pool =
require("../config/db");


// ==========================
// ADD COURSE
// ==========================

const addCourse =
  async (req, res) => {

    try {

      const {

        title,

        description,

        duration,

        level,

        price,

      } = req.body;

      // VALIDATION

      if (
        !title ||
        !description ||
        !duration ||
        !level ||
        !price
      ) {

        return res.status(400).json({

          success: false,

          message:
            "All fields are required",

        });

      }

      // INSERT COURSE

      const result =
        await pool.query(

          `
          INSERT INTO courses
          (
            title,
            description,
            duration,
            level,
            price
          )

          VALUES ($1, $2, $3, $4, $5)

          RETURNING *
          `,

          [

            title,

            description,

            duration,

            level,

            price,

          ]

        );

      return res.status(201).json({

        success: true,

        message:
          "Course Added Successfully 🚀",

        course:
          result.rows[0],

      });

    }

    catch (error) {

      console.log(error);

      return res.status(500).json({

        success: false,

        message:
          "Failed to add course",

      });

    }

  };


// ==========================
// GET ALL COURSES
// ==========================

const getCourses =
  async (req, res) => {

    try {

      const result =
        await pool.query(

          `
          SELECT *
          FROM courses
          ORDER BY id DESC
          `

        );

      return res.status(200).json({

        success: true,

        courses:
          result.rows,

      });

    }

    catch (error) {

      console.log(error);

      return res.status(500).json({

        success: false,

        message:
          "Failed to fetch courses",

      });

    }

  };


module.exports = {

  addCourse,

  getCourses,

};