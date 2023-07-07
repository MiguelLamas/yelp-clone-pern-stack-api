// importing and destructuring Pool from pg;
const { Pool } = require("pg");
require("dotenv").config();

const databaseConfig = {
    connectionString: process.env.DATABASE_URL
};
 
// using Pool to connect with our Postgres DB;
const pool = new Pool(databaseConfig);
    
// ({
//     user: process.env.PG_USER,
//     host: process.env.PG_HOST,
//     database: process.env.PG_DATABASE,
//     password: process.env.PG_PASSWORD,
//     port: process.env.PG_PORT,
// });


 
// exporting query function;
module.exports = {
    query: (text, params) => pool.query(text, params),

}


