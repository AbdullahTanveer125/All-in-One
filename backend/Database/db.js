require('dotenv').config(); // 🔥 Must be FIRST

const pkg = require('pg');


const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});


// console.log("=======aaaaaa===== ",process.env.DATABASE_URL)

module.exports = pool;