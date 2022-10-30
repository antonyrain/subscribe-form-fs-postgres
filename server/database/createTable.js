const { pool } = require('./connectDB')

async function createTable () {
    const text = `
    CREATE TABLE IF NOT EXISTS "subscribers" (
        "id" SERIAL,
        "name" VARCHAR(100) NOT NULL,
        "email" VARCHAR(100) NOT NULL,
        "created" VARCHAR(100) NOT NULL,
        PRIMARY KEY ("id")
    );`
    await pool.query(text)
};

module.exports = { createTable }