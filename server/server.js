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
  let body = req.body;

  console.log(body);

  // sanity checks even though the client should behave, people don't!.
  // is suggestion empty ?

  const query = db.query(
    `INSERT INTO groupthink_suggestion_table (category_id,suggestion_description,suggestion_score) VALUES ($1,$2,$3)`,
    [1, body.suggestionBox, 1]
  );

  res.json();

  console.log("getsugs processed");
});

app.post("/newvote", (req, res) => {
  let body = req.body;

  console.log("newvote:", body);

  // get the current score
  const currentScore = getScore(body.currentCategory, body.suggestionID);

  console.log("got score:", currentScore);
  // const query = db.query(
  //   `INSERT INTO groupthink_suggestion_table (category_id,suggestion_description,suggestion_score) VALUES ($1,$2,$3)`,
  //   [1, body.suggestionBox, 1]
  // );

  res.json();

  console.log("newVote processed");
});

async function getScore(catID, sugID) {
  const query = await db.query(
    `SELECT * from groupthink_suggestion_table WHERE id =${sugID} AND category_id = ${catID}`
  );
  console.log("getScore query:", query);
}
