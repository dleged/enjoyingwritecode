const cluster = require("cluster");
const express = require("express");


const app = express();
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    conosle.log(`process ${workder.process.pid} is exit!`);
  });
} else {
  app.listen(8000, () => {
    console.log(`process ${process.pid} is stared!`);
  });

  app.use("/", (req, res, next) => {
    console.log(`visible ${process.pid}!`,2);
    res.end(`process ${process.pid} is stared!`);
  });
}
