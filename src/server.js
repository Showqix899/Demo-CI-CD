import express from "express";
import dotenv from "dotenv"
dotenv.config({})
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
  });
});



export default app;