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

app.use(authorization);

app.post("/post", (req, res) => {
  res.send(res.user);
});

app.get("/login", (req, res) => {
  const username = req.body.username;
  const user = posts.find((post) => post.username === username);

  // if (!user) {
  //   res.status(401).send("用户信息不存在");
  // }

  const token = generateJWT({ user });
  res.json({ JWT: token });
});

function generateJWT(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1000s",
  });
}

function authorization(req, res, next) {
  if (req.path === "/login") {
    return next();
  }

  const token = req.body["JWT"] || '';

  if (!token) {
    return res.status(401).send("Sorry, you do not have authorization");
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      res.status(403).send("Sorry, plase login agin");
    }
    // console.log(err, user);
    console.log(user);
    res.user = user;
    next();
  });
}

app.listen(3000);
