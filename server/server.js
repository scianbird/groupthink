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

  // console.log(body);

  // sanity checks even though the client should behave, people don't!.
  // is suggestion empty ?

  const query = db.query(
    `INSERT INTO groupthink_suggestion_table (category_id,suggestion_description,suggestion_score) VALUES ($1,$2,$3)`,
    [1, body.suggestionBox, 1]
  );

  res.json();

  // console.log("getsugs processed");
});

app.post("/newvote", (req, res) => {
  let body = req.body;

  updateScore(body.currentCategory, body.suggestionID);
  res.json();

  // console.log("newVote processed");
});

async function updateScore(catID, sugID) {
  // console.log(
  //   `SELECT * from groupthink_suggestion_table WHERE category_id = ${catID} AND id =${sugID};`
  // );

  const query = await db.query(
    `SELECT * from groupthink_suggestion_table WHERE category_id = ${catID} AND id =${sugID};`
  );

  if (query.rowCount != 1) {
    console.log("ERROR: getScore call failed to get suggestion_score");
    return -1;
  }

  // console.log("query returned -> ", query.rows[0].suggestion_score);

  let score = query.rows[0].suggestion_score;

  const query2 = await db.query(
    `UPDATE groupthink_suggestion_table SET suggestion_score = ${score + 1} 
    where category_id = ${catID} AND id =${sugID}`
  );
}
