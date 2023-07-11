const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

  const createRestaurantsTable = async () => await pool.query(
      "CREATE TABLE restaurants (id BIGSERIAL NOT NULL PRIMARY KEY, name VARCHAR(255) NOT NULL, location VARCHAR(255) NOT NULL, price_range INT NOT NULL check(price_range >= 1 and price_range <= 5))"
    );
    

console.log(createRestaurantsTable())

