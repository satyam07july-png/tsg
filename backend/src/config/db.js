const { Pool } = require("pg");
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");

// Ensure environment is loaded from any standard location
const envPaths = [
  path.join(__dirname, "..", ".env"),
  path.join(__dirname, "..", "..", ".env"),
  path.join(__dirname, "..", "..", "..", ".env"),
];

for (const p of envPaths) {
  if (fs.existsSync(p)) {
    dotenv.config({ path: p });
  }
}

const connectionString = process.env.DATABASE_URL;

const isProduction = process.env.NODE_ENV === "production";

const poolConfig = {
  connectionString,
  ssl: connectionString && (connectionString.includes("sslmode=require") || connectionString.includes("neon.tech") || isProduction)
    ? { rejectUnauthorized: false }
    : false,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
};

const pool = new Pool(poolConfig);

if (connectionString) {
  pool
    .connect()
    .then((client) => {
      console.log("Database Connected Successfully ✅");
      client.release();
    })
    .catch((error) => {
      console.error("Database Connection Error ❌:", error.message);
    });
} else {
  console.warn("⚠️ DATABASE_URL is not configured. Set DATABASE_URL in .env");
}

module.exports = pool;