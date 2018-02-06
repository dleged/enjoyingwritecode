const express = require('express');
const path = require('path');
const router = require('router');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
// /*可以访问所有的路由
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
