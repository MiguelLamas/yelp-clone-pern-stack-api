<br />

# YELP CLONE - Backend (PERN Stack - Postgres, Express, React, and Node)

A basic Yelp Clone App built with the PERN stack technologies. The application allows users to add restaurants, their location and price range initially. The user can then add reviews and ratings to each restaurant, as well as update and delete individual restaurants. The app takes into account the ratings provided by users and returns an average ratings score for each one aswell as a total of the number of reviews submitted.

This repository holds the code to make our API, it runs on an Express Server, making queries to a PostgreSQL Database. The credentials for the database will be stored in your environment variables.

The server handles requests to a database with 2 tables that allows for users to add and update restaurant details, as well as adding reviews for each one.

**This README is for the Backend of the YELP Clone app. If you would like to explore the Frontend of the app please go to the [Frontend repository](https://github.com/MiguelLamas/yelp-clone-pern-stack-frontend)**

<br />

---

# **Environment Variables**

To run this project locally, you will need to add the following environment variables to your .env file

```bash
DATABASE_URL
```

<br />

---

# **Run Locally**

Clone the project

```bash
  git clone https://github.com/MiguelLamas/yelp-clone-pern-stack-api.git
```

Go to the project directory

```bash
  cd yelp-clone-pern-stack-api.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Copy your database (e.g. ElephantSQL) URL into the .env file, following the format:

```bash
 DATABASE_URL = <Database URL goes here>
```

Create all tables in your database by running the following scripts in the terminal:

```bash
npm run createRestaurantsTable
npm run createReviewsTable
```

To populate the tables you can achieve this by interacting with the front end UI [https://yelp-clone-pern-stack-frontend.onrender.com/](https://yelp-clone-pern-stack-frontend.onrender.com/). If you would like to run the front end locally, please follow the instructions in the next section.

<br/>

---

# **Frontend:**

The front end is deployed using Render, however you will need to follow the steps below if you would like to run it locally.

1. Git clone the frontend repository.

```bash
  git clone https://github.com/MiguelLamas/yelp-clone-pern-stack-frontend.git
```

2. Remember to navigate to the correct folder.

```bash
  cd yelp-clone-pern-stack-frontend.git
```

3. Install all necessary dependencies by running the following command in the terminal.

```bash
  npm i
```

4. Start the app.

```bash
  npm run start
```

<br/>

---

# **Running Tests:**

To run tests, run the following command

```bash
  npm run test
```

<br />

---

## **Tech Stack:**

**Frontend:**
- React.js, JavaScript, HTML, Bootstrap 5

**Backend:**
- Node.js, Express, PostgreSQL, CORS

**Deployed with:**
- Render (for API Web Service & Frontend Static Site) and ElephantSQL (for PostgreSQL Database)

<br/>

---

## **API Reference:**

### Restaurants Table

#### Get all restaurants

```http
  GET /api/v1/restaurants
```

<br/>

#### Get a specific restaurant and reviews

```http
  GET /api/v1/restaurants/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `Integer` | **Required**. Restaurant ID associated with restaurant |
| `restaurant_id` | `Integer` | **Required**. Reviews restaurant_id which is the foreign key referencing ID of restaurant |

<br />

#### Post a new restaurant

```http
  POST /api/v1/restaurants
```

| Parameter  | Type      | Description                                      |
| :--------  | :-------  | :-------------------------------- |
| `body`     | `JSON`    | **Required**. JSON object containing restaurant details |
| `name`  | `string`  | **Required**. Name associated with restaurant|
| `location`   | `string`  | **Required**. Location associated with the restaurant|
| `price_range`   | `Integer`  | **Required**. Price range associated with restaurant|


<br />

#### Post a new review in a specific restaurant

```http
  POST /api/v1/restaurants/:id/addReview
```

| Parameter  | Type      | Description                                      |
| :--------  | :-------  | :-------------------------------- |
| `body`     | `JSON`    | **Required**. JSON object containing restaurant details |
| `restaurant_id`  | `Integer`  | **Required**. Reviews table restaurant_id associated with main restaurants table ID|
| `name`   | `string`  | **Required**. Name associated with the person posting a review|
| `review`   | `Integer`  | **Required**. Review associated with restaurant|
| `rating`   | `Integer`  | **Required**. Rating associated with restaurant|


<br />

#### Update the data for a new restaurant

```http
  PUT /api/v1/restaurants
```

| Parameter  | Type      | Description                                      |
| :--------  | :-------  | :-------------------------------- |
| `body`     | `JSON`    | **Required**. JSON object containing restaurant details |
| `id`   | `Integer`  | **Required**. ID associated with restaurant|
| `name`  | `string`  | **Required**. Name associated with restaurant|
| `location`   | `string`  | **Required**. Location associated with the restaurant|
| `price_range`   | `Integer`  | **Required**. Price range associated with restaurant|

<br />

#### Delete the data for a new restaurant

```http
  DELETE /api/v1/restaurants/:id
```

| Parameter  | Type      | Description                                      |
| :--------  | :-------  | :-------------------------------- |
| `id`   | `Integer`  | **Required**. ID associated with restaurant|

<br />

---

## **Appendix:**

</br>

- [PostgreSQL](https://www.postgresql.org/)
- [Express.js](https://expressjs.com/)
- [React](https://react.dev/)
- [Node.js](https://nodejs.org/en/)
- [ElephantSQL](https://www.elephantsql.com/)
- [Render](https://render.com/)
