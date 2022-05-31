// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
// Function.prototype.bind(t);

// 解法 一
Function.prototype._bind = function (t, ...arguments) {
  let fn = this;
  return (...args) => {
    fn.call(t, ...arguments, ...args);
  }
};


let target = {
  name: 'target'
};

function callName(a, b) {

  console.log(this.name, a, b);
}


// 解法 二

Function.prototype._bind2 = function (t, ...arguments) {

  t.fn = this;
  return (...args) => {
    return t.fn(...arguments, ...args);
  }

}

let newFn = callName._bind(target, 1);
newFn(2);

let newFn2 = callName._bind2(target, 1);
newFn2(2);
