
// 实现一个函数深拷贝
function deepCopy(target, visited = new WeakMap()) {
  // 处理循环引用
  if (visited.has(target)) return visited.get(target);

  // 处理基本类型和 null
  if (target === null || typeof target !== 'object') return target;

  let dist;
  // 处理 Date、RegExp、函数、Map 和 Set
  if (target instanceof Date) {
    dist = new Date(target);
  } else if (target instanceof RegExp) {
    dist = new RegExp(target.source, target.flags);
  } else if (target instanceof Function) {
    dist = function () { return target.apply(this, arguments) };
  } else if (target instanceof Map) {
    dist = new Map();
    for (let [key, value] of target) {
      dist.set(deepCopy(key, visited), deepCopy(value, visited));
    }
  } else if (target instanceof Set) {
    dist = new Set();
    for (let value of target) {
      dist.add(deepCopy(value, visited));
    }
  } else {
    // 处理对象
    dist = Object.create(Object.getPrototypeOf(target));
    // 记录已访问过的对象
    visited.set(target, dist);
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        dist[key] = deepCopy(target[key], visited);
      }
    }
  }
  return dist;
}

// 示例使用
const obj = {
  n: 'null',
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
