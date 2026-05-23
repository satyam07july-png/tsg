const { Pool } =
  require("pg");

const pool = new Pool({

  connectionString:
    process.env.DATABASE_URL,

  ssl: {

    rejectUnauthorized:
      false,

  },

});

pool.connect()

  .then(() => {

    console.log(
      "Neon DB Connected ✅"
    );

  })

  .catch((error) => {

    console.log(
      "Neon DB Error ❌",
      error
    );

  });

module.exports = pool;