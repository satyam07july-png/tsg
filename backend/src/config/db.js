

const { Pool } = require("pg");

const pool = new Pool({

  connectionString:
    process.env.DATABASE_URL,

  ssl: {
    rejectUnauthorized: false,
  },

});


// TEST CONNECTION

pool.query("SELECT NOW()")

  .then(() => {

    console.log(
      "Neon Database Connected ✅"
    );

  })

  .catch((err) => {

    console.log(
      "Neon DB Error ❌",
      err
    );

  });

module.exports = pool;