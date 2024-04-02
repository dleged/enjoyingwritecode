
// 实现一个函数深拷贝

function deepCopy(target, visited = new WeakSet()) {

  // null 和 非对象
  if (target === null || typeof target !== 'object') return target;

  // 存在则返回
  if (visited.has(target)) return visited.get(target);

  return dist;

}

// 示例使用
const obj = {
  n: null,
  a: 1,
  b: [2, 3, 4],
  c: { d: 5, e: 6 },
  reg: /\d+/g,
  map: new Map([[1, 2], [3, 4]]),
  set: new Set([1, 2, 3, 3, 4]),
  sayHello: function () {
    console.log('Hello!');
  },
};

obj.obj = obj;

const newObj = deepCopy(obj);
console.log(newObj);

console.log(newObj.c === obj.c);
