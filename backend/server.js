import express from "express";
import cors from "cors";
import userRouters from "./routes/userRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", userRouters);
app.listen(5000, () => {
  console.log("server is running on port 5000 ");
});
