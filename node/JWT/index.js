const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();

const posts = [
  {
    username: "catlike",
    post: "💅💅💅",
  },
  {
    username: "jackyef",
    post: "🎬🎬🎬",
  },
];

app.use(express.json());

app.post("/post", (req, res) => {
  res.send(posts[0]);
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = posts.find((post) => post.username === username);
  if (!user) {
    res.status(401).send("用户信息不存在");
  }
  console.log(user);
  res.json({ JWT: generateJWT({ a: 1 }) });
});

function generateJWT(user) {
  console.log(process.env.ACCESS_TOKEN_SECRET);
  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "10s" });
}

app.listen(3000);
