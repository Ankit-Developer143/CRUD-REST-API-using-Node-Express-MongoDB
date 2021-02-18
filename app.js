const express = require("express");
const mongoose = require("mongoose");
const app = express();

const url = "mongodb://localhost/AlienDBex";

mongoose.connect(url);

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;

con.on("open", function () {
  console.log("Connected...");
});

app.use(express.json());

const alienRouter = require("./router/aliens");
app.use("/aliens", alienRouter);

app.listen(3000, function () {
  console.log("Serever Started");
});
