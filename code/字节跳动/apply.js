// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

Function.prototype._apply = function (target, args) {
  target.fn = this;
  let ret = undefined;
  if (!args) {
    ret = target.fn();
  } else {
    ret = target.fn(...args);
  }
  delete target.fn;
  return ret;
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