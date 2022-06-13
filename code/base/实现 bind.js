// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
// Function.prototype.bind(t);

// 解法 一
Function.prototype._bind = function (t, ...arguments) {
  let fn = this;
  t.prototype = fn.prototype;
  return function (...args) {
    fn.call(t, ...arguments, ...args);
  }
};


let target = {
  name: 'target'
};

function callName(a, b) {
  console.log(this.name, a, b);
}

callName.prototype.name = 'callName';


// 解法 二

// Function.prototype._bind2 = function (t, ...arguments) {

//   t.fn = this;
//   return (...args) => {
//     return t.fn(...arguments, ...args);
//   }

// }

// let newFn = callName._bind(target, 1);
// newFn(2);
// let n = new newFn();
// console.log(n.name) // undefined


// let newFn2 = callName._bind2(target, 1);
// newFn2(2);


// 问题
// 1. console.log(newFn.name); 会丢失
// 2. new newFn 也会丢失 this

// 👍 解法三

function persion(a, b, c) {
  console.log(this.description, 'inner');
  console.log(a, b, c)
  return 'ends';
}

persion.prototype.description = 'persion constructor';

Function.prototype.newBind = function (obj) {

  let that = this,
    arg1 = Array.prototype.slice.call(arguments, 1),
    ret = undefined,
    o = function () { },
    newF = function () {
      let arg2 = Array.prototype.slice.call(arguments);
      const arg = arg1.concat(arg2);

      if (this instanceof newF) {
        ret = that.apply(this, arg);
      } else {
        ret = that.apply(obj, arg);
      }

      return ret;
    }

    o.prototype = that.prototype;
    newF.prototype = new o();

    return newF;

}

//persion constructor inner
// 重 写 bind
// persion constructor


const obj1 = {
  description: 'obj'
}
let p1 = persion.bind(obj1, '重');
let _p1 = new p1('写', 'bind');

console.log(_p1);

let p2 = persion.bind(obj1, '重');
console.log(p2('写', 'bind'));

console.log('--------------------')

const obj = {
  description: 'obj'
}
let p = persion.newBind(obj, '重');
let _p = new p('写', 'bind');// new 后会重写 this，再也不是指向 bind 的 obj 对象了

console.log(_p);

let p3 = persion.newBind(obj1, '重');
console.log(p3('写', 'bind'));

