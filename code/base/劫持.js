let a = {};
let b = 0;
Object.defineProperty(a, 'x', {
  get: function() {
    b++;
    return b;
  },
  set: function(newValue) {
    // 可以在这里定义属性的设置行为
    // 例如：this._x = newValue;
  }
});

console.log(a.x); // 输出：1
console.log(a.x); // 输出：2