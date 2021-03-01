const Koa = require('koa');
const openbrowser = require('openbrowser');
const router = require('./middleware/router');

const app = new Koa();
console.log(1);
app.use((ctx, next) => {
    ctx.body = 'koa app!!!'
    next();// 指向下一个中间件函数
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
    console.log(app)
    console.log('server starting in port 5000...');
});


// 洋葱模型
function compose (middleware) {
    if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!')
    for (const fn of middleware) {
      if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')
    }
  
    /**
     * @param {Object} context
     * @return {Promise}
     * @api public
     */
  
    return function (context, next) {
      // last called middleware #
      let index = -1
      return dispatch(0)
      function dispatch (i) {
        if (i <= index) return Promise.reject(new Error('next() called multiple times'))
        index = i
        let fn = middleware[i]
        if (i === middleware.length) fn = next
        if (!fn) return Promise.resolve()
        try {
          return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
        } catch (err) {
          return Promise.reject(err)
        }
      }
    }
  }