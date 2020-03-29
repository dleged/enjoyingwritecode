const Koa = require('koa');
const openbrowser = require('openbrowser');
const router = require('./middleware/router');

const app = new Koa();

app.use((ctx, next) => {
    console.log(ctx);
    next();
});

app.use(router);

app.listen(3000, () => {
    console.log('server starting in port 3000...');
});