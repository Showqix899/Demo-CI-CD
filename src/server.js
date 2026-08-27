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


app.get("/messi",(req,res)=>{
    res.status(200).json({
        message:"Messi is the goat"
    })
})


export default app;