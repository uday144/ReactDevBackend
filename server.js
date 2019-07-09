const express = require("express");

const mongoose = require("mongoose");

const app = express();

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

const port = process.env.port || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
