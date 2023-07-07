// importing and destructuring Pool from pg;
const { Pool } = require("pg");
require("dotenv").config();


const devConfig = {
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT,
  };

  const proConfig = {
    connectionString: process.env.DATABASE_URL,
  };
 
// using Pool to connect with our Postgres DB;
const pool = new Pool(
    process.env.NODE_ENV === "production" ? proConfig : devConfig
);
    
// exporting query function;
module.exports = {
    query: (text, params) => pool.query(text, params),

}


