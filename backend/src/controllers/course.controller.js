const pool = require("../config/db");

const {

  addActivity,

} = require("./activity.controller");


// ADD COURSE

const addCourse = async (req, res) => {

  try {

    const {

      title,
      description,
      duration,
      assignments,
      videos,
      instructor,
      price,
      image,
      category,

    } = req.body;

    const newCourse = await pool.query(

      `INSERT INTO courses
      (
        title,
        description,
        duration,
        assignments,
        videos,
        instructor,
        price,
        image,
        category
      )

      VALUES
      ($1,$2,$3,$4,$5,$6,$7,$8,$9)

      RETURNING *`,

      [
        title,
        description,
        duration,
        assignments,
        videos,
        instructor,
        price,
        image,
        category,
      ]

    );

      await addActivity(

  "New Course Added",

  `${title} course added by admin`

);

    res.status(201).json({

      message: "Course Added Successfully",

      course: newCourse.rows[0],

    });

  

  }
  
  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

};


// GET ALL COURSES

const getCourses = async (req, res) => {

  try {

    const courses = await pool.query(

      "SELECT * FROM courses ORDER BY id DESC"

    );

    res.status(200).json(courses.rows);

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

};


// GET SINGLE COURSE

const getSingleCourse = async (req, res) => {

  try {

    const { id } = req.params;

    const course = await pool.query(

      "SELECT * FROM courses WHERE id = $1",

      [id]

    );

    res.status(200).json(course.rows[0]);

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

};


// delete course

const deleteCourse = async (req, res) => {

  try {

    const { id } = req.params;

    await pool.query(

      "DELETE FROM courses WHERE id = $1",

      [id]

    );

    res.status(200).json({

      message: "Course Deleted Successfully",

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

};
 
// edit course
const updateCourse = async (req, res) => {

  try {

    const { id } = req.params;

    const {

      title,
      description,
      duration,
      assignments,
      videos,
      instructor,
      price,
      image,
      category,

    } = req.body;

    const updatedCourse = await pool.query(

      `UPDATE courses

      SET

      title = $1,
      description = $2,
      duration = $3,
      assignments = $4,
      videos = $5,
      instructor = $6,
      price = $7,
      image = $8,
      category = $9

      WHERE id = $10

      RETURNING *`,

      [

        title,
        description,
        duration,
        assignments,
        videos,
        instructor,
        price,
        image,
        category,
        id,

      ]

    );

    res.status(200).json({

      message: "Course Updated Successfully",

      course: updatedCourse.rows[0],

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

  addCourse,

  getCourses,

  getSingleCourse,

  deleteCourse,

  updateCourse,

};