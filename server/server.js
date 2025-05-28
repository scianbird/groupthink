import express from "express";
import dotenv from "dotenv";
import pg from "pg";

const app = express();

app.use(express.json());
dotenv.config();

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
