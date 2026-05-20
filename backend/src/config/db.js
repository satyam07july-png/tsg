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
      "Database Connected ✅"
    );

  })

  .catch((err) => {

    console.log(
      "Database Connection Error ❌",
      err
    );

  });

module.exports = pool;