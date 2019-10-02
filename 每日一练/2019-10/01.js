//Promise 的含义
// Promise.prototype.then()
// Promise.prototype.catch()
// Promise.prototype.finally() //node环境不支持
// Promise.all()
// Promise.race()
// Promise.resolve()
// Promise.reject()
// Promise.try()
function random(){
  return Math.random() * 1000 + 2;
}

var p1 = new Promise((resolve,reject) => {
  setTimeout(() => resolve('p1'),random())
})
var p2 = new Promise((resolve,reject) => {
  setTimeout(() => resolve('p2'),random())
})
var p3 = new Promise((resolve,reject) => {
  setTimeout(() => resolve('p3'),random())
})
var p4 = Promise.resolve('p4');

p1.then((d) => console.log(d));
p2.then((d) => console.log(d));
p3.then((d) => console.log(d));
p4.then((d) => console.log(d));

pAll = Promise.all([p1,p2,p3,p4]).then(console.log)//按传入顺序返回
pFinally = Promise.all([p1,p2,p3,p4]).then(console.log)//按传入顺序返回
pRace = Promise.race([p1,p2,p3,p4]).then(console.log)//最先返回的
