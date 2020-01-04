const promiseAll = function(...args){
  return new Promise((resolve,reject) => {
    args.reduce(async (acc,promise,index) => {
      promise
        .then(result => {
          console.log(acc);
          acc.push(result);
          if(index === args.length - 1){
            resolve(acc);
          }
        })
        .catch(error => {
          acc.push(error);
          if(index === args.length - 1){
            resolve(acc);
          }
        });
        return acc;
    },[]);
  });
}

let p1 = new Promise((resolve,reject) => setTimeout(resolve,2000,'p1'));
let p2 = Promise.resolve('p2');
let p3 = new Promise((resolve,reject) => setTimeout(reject,3000,'p2'));

console.log(promiseAll(p1,p2,p3).then(console.log));
