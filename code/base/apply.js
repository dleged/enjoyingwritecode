// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

Function.prototype._apply = function (target = {}, args) {
  // this 是当前函数
  target.fn = this;
  let result = null;

  result = target.fn(...args);

  delete target.fn;
  return result;

}

let target = {
  name: 'target is apply',
  run: function () {
    console.log(this.name);
  }
}

function reallyFn(...arg) {
  console.log(...arg);
  console.log(this.run());
  return 'reallyFn';
}

reallyFn._apply(target, ['arguments', 'is', 'array']);