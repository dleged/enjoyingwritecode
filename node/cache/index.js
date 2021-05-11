const Koa = require('koa');
const koaStatic = require('koa-static');
const path = require('path');

const app = new Koa();
const host = 'localhost';
const port = 8888;


app.use(async (ctx,next) => {
  ctx.set({'Cache-Control': 'max-age=5000'});
  
  await next();
})

app.use(koaStatic(path.join(__dirname, './static')));

app.listen(port, function(){
  console.log(`server is listent in ${host}:${port}`);
})