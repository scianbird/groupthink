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
