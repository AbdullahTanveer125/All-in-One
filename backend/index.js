const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// const pkg = require('pg');
const pool = require('./Database/db'); // 👈 Import the pool from db/index.js

dotenv.config();

// console.log("aaaaaa===== ",process.env.DATABASE_URL)

const user_router=require("./Routes/user");








// const { Pool } = pkg;

const app = express();
const port = process.env.PORT || 5000;

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL
// });

app.use(cors());
app.use(express.json());





//to use router
app.use("/user",user_router);  







app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
