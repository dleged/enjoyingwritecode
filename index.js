
class Express {
  middlewares = [];
  use(fn) {
    this.middlewares.push(fn);
  }

  start() {
    let ctx = {};
    this.composeMiddlewares(ctx);
  }

  composeMiddlewares(ctx) {

    for (let fn of this.middlewares) {
      if (fn !== fn) throw Error('middleware must be a function!');
    }

    function run(ctx, middlewares) {

      dispatch();
      function dispatch() {
        let fn = middlewares.shift();

        if (!fn) return Promise.resolve(ctx);
        try {
          return Promise.resolve(fn(ctx, dispatch.bind(null, ctx)));
        } catch (err) {
          return Promise.reject(err);
        }
      };

    }

    run(ctx, this.middlewares);

  }
}


const app = new Express();

const delay = () => new Promise((res) => setTimeout(res, 4000))


app.use(async (ctx, next) => {
  console.log(1);
  next();
  console.log(2);
});

app.use(async (ctx, next) => {
  console.log(3)
  await delay();
  next();
  console.log(4)
});

app.start();