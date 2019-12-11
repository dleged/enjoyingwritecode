//###888###
let promisify = func => (...args) =>
  new Promise((resolve, reject) =>
    func(...args, (err, result) => (err ? reject(err) : resolve('hello and')))
  );

let dalay = promisify((dalay,cb) => setTimeout(cb,dalay));
dalay(2000).then((r) => console.log(r,'hi!'));

//收集参数
//example Promise.all
let collectionInto = fn => (...args) => fn(args);
let promiseAll = collectionInto(Promise.all.bind(Promise));

let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = new Promise((resolve,reject) => setTimeout(() => resolve(3),2000));

promiseAll(p1,p2,p3).then(console.log);
