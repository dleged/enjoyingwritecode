
function shallowClone(target) {
  if (typeof target !== 'object') {
    throw new Error('target is not a object')
  }

  const result = Array.isArray(target) ? [] : {};

  for (let key in target) {

    if (target.hasOwnProperty(key)) {
      result[key] = target[key];
    }

  }

  return result;
}


let map = new Map();
function deepClone(target) {

  // null undefined
  if (typeof target === null) {
    return target;
  }

  // 基本类型
  if (typeof target !== 'object') {
    return target;
  }

  let dist = Object.create(null);
  if (target instanceof Array) {
    dist = [];
  } else if (target instanceof Date) {
    dist = new Date(target);
  } else if (target instanceof RegExp) {
    let source = target.source;
    let flags = target.flags;
    let lastIndex = target.lastIndex;
    dist = new RegExp(source, flags);
    dist.lastIndex = lastIndex
  } else if (target instanceof Function) {
    dist = function () { target.apply(this, arguments) }
  } else if (target instanceof Symbol) {
    dist = Object(Symbol.prototype.valueOf.call(target))
  } else if (target instanceof Map) {
    dist = new Map(target);
  }

  // 处理循环引用
  if (!map.get(target)) {
    map.set(target, dist);
  } else {
    return map.get(target);
  }
  // 遍历自有属性
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      dist[key] = deepClone(target[key]);
    }
  }

  return dist;
}


function dfsClone(target) {
  const source = {};
  const stack = [{ targe: target, key: undefined, source: source }];
  const map = new Map();

  clone(target);

  while (stack.length) {
    let { target, key, source } = stack.shift();
    clone(target, source);
  }

  function clone(target, source) {
    // null undefined
    if (typeof target == null) {
      return target;
    }

    // 基本类型
    if (typeof target !== 'object') {
      return target;
    } else {
      let dist = source || Object.create(null);
      if (target instanceof Array) {
        dist = [];
      } else if (target instanceof Date) {
        dist = new Date(target);
      } else if (target instanceof RegExp) {
        let source = target.source;
        let flags = target.flags;
        let lastIndex = target.lastIndex;
        dist = new RegExp(source, flags);
        dist.lastIndex = lastIndex
      } else if (target instanceof Function) {
        dist = function () { target.apply(this, arguments) }
      } else if (target instanceof Symbol) {
        dist = Object(Symbol.prototype.valueOf.call(target))
      } else if (target instanceof Map) {
        dist = new Map(target);
      }

      // 处理循环引用
      if (!map.get(target)) {
        map.set(target, dist);
      } else {
        return map.get(target);
      }
      source = dist;
      // 遍历自有属性
      for (let key in target) {
        if (target.hasOwnProperty(key)) {
          // dist[key] = deepClone(target[key]);
          stack.push({ target: target[key], source: source[key] });
        }
      }
    }

  }

  return source;
}

// dfs [{parent: {},key: 'time',source: target}]
let target = {
  time: new Date(),
  object: { new: '1' },
  array: [1, 2, 3],
  function: function (a) { console.log(a) },
  Symbol: Symbol('instance'),
  regx: /[a-z]/mg,
  map: new Map().set('name', 'a'),
}

target.circula = target;
target.weakMap = new WeakMap().set(target, target);

targetCopy = deepClone(target)
target.object = { 'old': '1' };
console.log(target, 22, targetCopy);



