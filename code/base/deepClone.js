function deepClone(target, map = new Map()) {

  let dist = target;

  if (typeof target === 'object') {

    // 处理循环引用
    if (map.get(target)) {
      return map.get(target);
    }

    if (target instanceof Array) {
      dist = [];
    } else if (target instanceof Date) {
      dist = new Date(target);
    }
    else if (target instanceof RegExp) {
      dist = new RegExp(target.souce, target.flags);
    } else if (target instanceof Function) {
      dist = function () {
        return target(...arguments);
      }
    } else if (target instanceof Map) {
      return new Map(target);
    } else {
      dist = {}
    }

    map.set(target, dist);
    // 处理自有属性
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        dist[key] = deepClone(target[key], map);
      }
    }

    return dist;
  } else {
    return target;
  }

}

module.exports = deepClone;

const map = new Map();
map.set('a', 1);
map.set('b', 2);


const obj = [
  {
    fuc: (arg1, arg2) => console.log(arg1, arg2),
    date: new Date(),
    RegExp: /\d+/g
  },
  1,
  [1, 2, 3],
  map,
]

obj.push(obj);

const other = deepClone(obj);
obj[0] = 0;
console.log(other, obj);