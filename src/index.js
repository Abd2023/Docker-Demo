const express = require("express");
const { Pool } = require("pg");

const app = express();

const port = Number(process.env.PORT || 3000);
const dbHost = process.env.DB_HOST || "localhost";
const dbPort = Number(process.env.DB_PORT || 5432);
const dbUser = process.env.DB_USER || "postgres";
const dbPassword = process.env.DB_PASSWORD || "postgres";
const dbName = process.env.DB_NAME || "web_demo";

const isDbEnabled = process.env.DB_ENABLED === "true";

let pool;
if (isDbEnabled) {
  pool = new Pool({
    host: dbHost,
    port: dbPort,
    user: dbUser,
    password: dbPassword,
    database: dbName,
  });
}

app.get("/", (req, res) => {
  res.send(
    "Docker demo app is running. Try /info and /db-time......"
  );
});

app.get("/info", (req, res) => {
  res.json({
    message: "Container is healthy",
    port,
    dbEnabled: isDbEnabled,
    dbHost,
    tip: "In docker-compose, database host is service name: db",
  });
});

app.get("/db-time", async (req, res) => {
  if (!isDbEnabled) {
    return res.status(400).json({
      ok: false,
      error: "Database is disabled. Set DB_ENABLED=true.",
    });
  }

  try {
    const result = await pool.query("SELECT NOW() AS now");
    return res.json({ ok: true, dbNow: result.rows[0].now });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error.message,
      hint: "If running in compose, host must be DB_HOST=db, not localhost.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(
    `DB mode: ${isDbEnabled ? "enabled" : "disabled"} | host: ${dbHost}`
  );
});
