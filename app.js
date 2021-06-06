const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect(
  process.env.dbconnectionstring,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db");
  }
);

//MIDDLEWARES

const postreq = require("./post");

app.use("/post", postreq);

//ROUTES
app.get("/", (req, res) => {
  res.send("we are on home");
});

app.listen(3000, () => console.log("listening to 3000..."));
