const express = require("express");
const mongoose = require("mongoose");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profiles");
const users = require("./routes/api/users");

const app = express();

//db config
const db = require("./configure/keys").monoURI;
//connect to mongodb

console.log(db);
mongoose
  .connect(db)
  .then(() => console.log("database connected"))
  .catch(err => console.log("error on connection"));

app.get("/", (req, res) => {
  res.send("hello from the / route");
});

app.get("/apple", (req, res) => {
  res.send("heelo brother");
});

//use routes
app.use("/api/posts", posts);
app.use("/api/profile", profile);
app.use("/api/users", users);

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
