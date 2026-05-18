const pool = require("../config/db");


// ADD ACTIVITY

const addActivity = async (

  title,

  description

) => {

  try {

    await pool.query(

      `INSERT INTO activities
      (title, description)

      VALUES ($1, $2)`,

      [title, description]

    );

  }

  catch (error) {

    console.log(error);

  }

};


// GET ACTIVITIES

const getActivities = async (req, res) => {

  try {

    const activities = await pool.query(

      `SELECT * FROM activities
       ORDER BY created_at DESC`

    );

    res.status(200).json(

      activities.rows

    );

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

};


module.exports = {

  addActivity,

  getActivities,

};