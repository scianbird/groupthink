import express from "express";
import dotenv from "dotenv";
import pg from "pg";
import cors from "cors";

const app = express();

app.use(express.json());
dotenv.config();
app.use(cors());

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

app.listen(8080, function () {
  console.log("servers up on port 8080");
});

// test root route
app.get("/", function (request, response) {
  response.json({ message: "Welcome to our server" });
});

app.get("/getsugs", async (req, res) => {
  const query = await db.query(
    `SELECT * from groupthink_suggestion_table WHERE category_id = 1 ORDER BY suggestion_score DESC`
  );
  res.json(query.rows);
});

app.get("/getcats", async (req, res) => {
  const query = await db.query(`SELECT * from groupthink_category_table`);
  res.json(query.rows);
});

app.post("/newsug", (req, res) => {
  const body = req.body;
  console.log(body);

  // sanity checks even though the client should behave, people don't!.
  // is suggestion empty ?
  // check we have not got a suggestion with the same text ?
  // maybe disable the submit button until we get an update from the back end
  // res.json({ message: "Nope not doing that" });

  const query = db.query(
    // TODO: correct the tablenames
    `INSERT INTO groupthink_suggestion_table (category_id,suggestion,score) VALUES ($1,$2,$3)`,
    [body.userName, body.userComment]
  );
  res.json();
});
