const Koa = require('koa');
const openbrowser = require('openbrowser');
const router = require('./middleware/router');

const app = new Koa();

app.use((ctx, next) => {
    ctx.body = 'koa app!!!'
    next();
    console.log('A1');
});
app.use((ctx, next) => {
    next();
    console.log('A2');
});
app.use((ctx, next) => {
    next();
    console.log('A3');
});

app.use(router);

app.listen(5555, () => {
    console.log('server starting in port 3000...');
});