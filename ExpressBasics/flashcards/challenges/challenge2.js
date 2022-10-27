//Instructions
// In the root route, render the "main.pug" template.
//Pass the posts object to your template, naming it "posts".
const express = require("express");
const posts = require("./mock/posts.json");

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/templates");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/main", (req, res) => {
  res.render("main", { posts: posts });
});

app.listen(3000, () => {
  console.log("The frontend server is running on port 3000!");
});
