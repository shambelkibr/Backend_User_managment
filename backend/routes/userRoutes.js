import express from "express";
const router = express.Router();
import db from "../config/db.js";

router.get("/users", (req, res) => {
  db.query("select * from user ", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

export default router; // Change this line
