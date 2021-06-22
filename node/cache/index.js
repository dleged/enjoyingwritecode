const Koa = require('koa');
const koaStatic = require('koa-static');
const path = require('path');
const fs = require('fs');

const app = new Koa();
const host = 'localhost';
const port = 8888;

app.use(async (ctx,next) => {

  ctx.set({'Cache-Control': 'no-cache'});
  await next();

});

app.use(koaStatic(path.join(__dirname, './static')));

app.listen(port, function () {
  console.log(`server is listent in ${host}:${port}`);
});
