const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

  const createReviewsTable = async () => await pool.query(
      "CREATE TABLE todo (id BIGSERIAL PRIMARY KEY NOT NULL, restaurant_id BIGINT NOT NULL REFERENCES restaurants(id), name VARCHAR(50) NOT NULL, review TEXT NOT NULL, rating INT NOT NULL check(rating >=1 and rating <=5)"
    );
    

console.log(createReviewsTable())

