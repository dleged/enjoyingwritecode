const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    await next();
    console.log(ctx.body);
    console.log(2);
});

app.use(async (ctx, next) => {
    ctx.body = 'hellow koa server！';
    console.log(1);
});

app.listen(3000, () => {
    console.log('server starting in port 3000...');
});