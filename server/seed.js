import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const catData = [
  {
    category_title: "Food",
    category_description: "What and where are we going to eat.",
  },
];

const sugData = [
  {
    category_id: 1,
    suggestion_description: "The Hope and Anchor",
    suggestion_score: 1,
  },
  {
    category_id: 1,
    suggestion_description: "Pizza @ Bobs",
    suggestion_score: 3,
  },
  {
    category_id: 1,
    suggestion_description: "Sushisho Saito",
    suggestion_score: 2,
  },
];

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

catData.forEach(function (item) {
  db.query(
    `INSERT INTO groupthink_category_table (category_title,category_description) VALUES($1,$2)`,
    [item.category_title, item.category_description]
  );
});

sugData.forEach(function (item) {
  db.query(
    `INSERT INTO groupthink_suggestion_table (category_id, suggestion_description,suggestion_score) VALUES($1,$2,$3)`,
    [item.category_id, item.suggestion_description, item.suggestion_score]
  );
});
