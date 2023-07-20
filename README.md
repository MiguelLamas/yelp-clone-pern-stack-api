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

To populate the tables you can achieve this by interacting with the front end UI [here](https://yelp-clone-pern-stack-frontend.onrender.com/). If you would like to run the front end locally, please follow the instructions in the next section.

<br/>

---

# **Frontend**

The front end is deployed using Render, however you will need to follow the steps below if you would like to run it locally.

1. Git clone the frontend repository.

```bash
  git clone https://github.com/MiguelLamas/yelp-clone-pern-stack-frontend
```

2. Remember to navigate to the correct folder: yelp-clone-pern-stack-frontend

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

# **Running Tests**

To run tests, run the following command

```bash
  npm run test
```

<br />

---

<br/>

## **_Tech Stack:_**

**Frontend**
- React.js, JavaScript, HTML, Bootstrap 5

**Backend**
- Node.js, Express, PostgreSQL, CORS

<br/>

---

<br />

## API Reference

<br/>

### Pets Table

<br/>

#### Get all pets belonging to a user


```http
  GET /pets/${user_id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user_id` | `string` | **Required**. User ID associated with account |

<br/>

#### Get the info of a single pet belonging to a user

```http
  GET /pets/${user_id}?pet_id=${pet_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id` | `string` | **Required**. User ID associated with account |
| `pet_id`  | `string` | **Required**. Pet ID |

<br />

#### Get the info of a single pet 

```http
  GET /pets?pet_id=${pet_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `pet_id`  | `string` | **Required**. Pet ID |

<br />

#### Post the data for a new pet 

```http
  POST /pets
```

| Parameter  | Type      | Description                                      |
| :--------  | :-------  | :-------------------------------- |
| `body`     | `JSON`    | **Required**. JSON object containing pet details |
| `user_id`  | `string`  | **Required**. ID associated with user account (Front End obtains this from Auth0)|
| `pet_id`   | `string`  | **Required**. ID associated with the pet (Front End generates this with nanoid)|
| `name`     | `string`  | **Required**. Name of Pet |
| `species`  | `boolean` | **Required**. Species of pet true is Cat, false is Dog |
| `breed`    | `string`  | Breed of Pet |
| `age`      | `Integer` | Age of Pet |
| `weight`   | `Float`   | Weight of Pet |

<br />

#### Update the data of a Pet

```http
  PUT /pets/${pet_id}
```

| Parameter  | Type      | Description                                      |
| :--------  | :-------  | :-------------------------------- |
| `body`     | `JSON`    | **Required**. JSON object containing pet details |
| `user_id`  | `string`  | ID associated with user account (Front End obtains this from Auth0)|
| `pet_id`   | `string`  | **Required**. ID associated with the pet (Front End generates this with nanoid)|
| `name`     | `string`  | Name of Pet |
| `species`  | `boolean` | Species of pet true is Cat, false is Dog |
| `breed`    | `string`  | Breed of Pet |
| `age`      | `Integer` | Age of Pet |
| `weight`   | `Float`   | Weight of Pet |

<br />

### Symptoms Table

<br/>

#### Get all symptoms associated with a pet


```http
  GET /symptoms/${pet_id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pet_id`  | `string` | **Required**. ID associated with pet |

<br/>

#### Get all incidents of a particular symptom associated with a pet

```http
  GET /symptoms/${pet_id}?symptoms_id=${symptoms_id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pet_id`  | `string` | **Required**. ID associated with pet |
| `symptoms_id`  | `string` | **Required**. ID associated with a symptom entry|

<br/>

#### Post the data for a new symptom

```http
  POST /symptoms
```

| Parameter  | Type      | Description                                      |
| :--------  | :-------  | :-------------------------------- |
| `body`     | `JSON`    | **Required**. JSON object containing symptom details |
| `user_id`  | `string`  | **Required**. ID associated with user account (Front End obtains this from Auth0)|
| `pet_id`   | `string`  | **Required**. ID associated with the pet (Front End generates this with nanoid)|
| `symptoms_id`   | `string`  | **Required**. ID associated with the symptom (Front End generates this with nanoid)|
| `incident_id`   | `string`  | **Required**. ID associated with the incident (Front End generates this with nanoid)|
| `symptoms`     | `string`  | **Required**. Title/Name of the symptom |
| `date`  | `string` | **Required**. Date that the incident occured |
| `time`    | `string`  | **Required**. Time that the incident occured |
| `description`      | `string` | **Required**. More detailed explanation of the symptom |


<br />

#### Delete a symptom and all its incidents

```http
  Delete /symptoms/${symptoms_id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `symptoms_id`  | `string` | **Required**. ID associated with a symptom entry|

<br/>

### Reminders Table

<br/>

#### Get all reminders belonging to a pet


```http
  GET /reminders/pet_id=${pet_id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pet_id` | `string` | **Required**. ID associated with a pet |

<br/>

#### Post the data for a new reminder

```http
  POST /reminders
```

| Parameter  | Type      | Description                                      |
| :--------  | :-------  | :-------------------------------- |
| `body`     | `JSON`    | **Required**. JSON object containing symptom details |
| `user_id`  | `string`  | **Required**. ID associated with user account (Front End obtains this from Auth0)|
| `pet_id`   | `string`  | **Required**. ID associated with the pet (Front End generates this with nanoid)|
| `reminder_id`   | `string`  | **Required**. ID associated with the reminder (Front End generates this with nanoid)|
| `task`     | `string`  | **Required**. Title/Name of the task |
| `date`  | `string` | **Required**. Date that the task needs to be completed by |
| `completed`  | `boolean` | **Required**. Whether the task has been completed (default value is false) |
| `repeated`  | `boolean` | **Required**. Whether the task is done needs to be done multiple times |
| `frequency`      | `string` | How often the task needs to be completed Suitable entries: (null, 1, 7, 30, 365)|

<br />

#### Update the completed parameter of a reminder

```http
  Patch /reminders/${reminder_id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `reminder_id`  | `string` | **Required**. ID associated with a reminder entry|
| `body`     | `JSON`    | **Required**. JSON object containing symptom details |
| `completed`  | `boolean` | **Required**. Whether the task has been completed  |

<br/>

#### Delete a reminder

```http
  Delete /reminders/${reminder_id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `reminder_id`  | `string` | **Required**. ID associated with a reminder entry|

<br/>
---

<br />

## **_Appendix📝_**

</br>

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
