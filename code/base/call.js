//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call

Function.prototype._call = function (context, ...args) {

  let symbol = Symbol('fn');
  context[symbol] = this;

  let ret = undefined;
  if (args) {
    context[symbol](...args);
  } else {
    context[symbol]();
  }

  delete context[symbol];
  return ret;

}

const target = {
  name: 'call',
  run: function () {
    console.log(this.name);
  }
}

function reallyFn(...args) {
  console.log(...args);
  console.log(this.run());
  return 'reallyFn';
}

reallyFn._call(target, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);