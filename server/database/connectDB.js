const config = require('../utils/config')
const { Pool } = require("pg")

const connectionString = config.URL;
const pool = new Pool({ connectionString, })

module.exports = { pool }