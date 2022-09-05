// Object.create 将创建的对象作为原型

function objectCreate(obj) {
  function Fn() { }
  Fn.prototype = obj;
  return new Fn();
}

let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

console.log(objectCreate(obj));