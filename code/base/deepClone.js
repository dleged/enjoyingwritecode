
// function deepClone(target){
//   const weakMap = new WeakMap();
//   function clone(target){

//     if(target == undefined){
//       return target;
//     }

//     let dist = {};
//     if(typeof target !== 'object'){
//       return target;
//     }else{

//       if(weakMap.has(target)){
//         return weakMap.get(target);
//       }

//       if(target instanceof Array){
//         dist = [];
//       }else if(target instanceof Function){
//         dist = function(){target.apply(this,arguments)}
//       }else if(target instanceof Date){
//         dist = new Date(target);
//       }else if(target instanceof RegExp){
//         const {source,flags,lastIndex} = target;
//         dist = new RegExp(source,flags);
//         dist.lastIndex = lastIndex;
//       }else if(target instanceof Map){
//         dist = new Map(target);
//       }else if(target instanceof Symbol){
//         dist = Object(Symbol.prototype.valueOf.call(target));
//       }else if(target instanceof Set){
//         dist = new Set(target);
//       }
//       weakMap.set(target,dist);
//       for(let key in target){
//         if(target.hasOwnProperty(key)){
//           dist[key] = clone(target[key]);
//         }
//       }
//       return dist;
//     }
//   }
//   return clone(target);
// }

function initObjectWithType(source) {
  if (source instanceof Array) {
    return new Array();
  } else {
    return Object.create(Object.getPrototypeOf(source));
  }
}

function deepClone(source) {

  if (source === null || typeof source !== 'object') return source;
  if (source === undefined) return source;

  let map = new Map();
  let target = initObjectWithType(source);
  let queue = [{ target: target, source }];

  function clone(source) {
    if (source === null || typeof source !== 'object') return source;
    if (source === undefined) return source;

    let target;

    if (source instanceof Array) {
      target = new Array();
    } else if (source instanceof Map) {
      target = new Map(source);
    } else if (source instanceof Set) {
      target = new Set(source);
    } else if (source instanceof Date) {
      target = new Date(source);
    } else if (source instanceof Function) {
      target = source.bind({});
    } else if (source instanceof RegExp) {
      target = new RegExp(source.source, source.flags);
      target.lastIndex = source.lastIndex;
    } else if (source instanceof Symbol) {
      target = Object(Symbol.prototype.valueOf.call(source));
    } else {
      // 创建一个具有同样原型的对象
      target = Object.create(Object.getPrototypeOf(source));
    }

    return target;
  };

  while (queue.length) {
    let { target, source } = queue.shift();

    // 遍历可枚举
    for (let key in source) {
      // 排除原型属性
      if (!source.hasOwnProperty(key)) return;

      if (map.has(source[key])) {
        target[key] = map.get(source[key]);
      } else {
        if (typeof source[key] === 'object') {
          // 目标对象的值赋值为原对象的值
          target[key] = clone(source[key]);
          // 缓存拷贝过的值
          map.set(source[key], target[key]);
          // 对象其他的属性加入队列中
          queue.push({ target: target[key], source: source[key] });

        } else {
          target[key] = source[key];
        }
      }
    }

  }

  return target;
}

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

targetCopy = deepClone(target)
targetCopy.object = { 'old': '1' };
targetCopy.array = [3, 2, 1];
console.log(target, 22, targetCopy);

let targetArr = [{
  time: new Date(),
  object: { new: '1' },
  array: [1, 2, 3],
  function: function (a) { console.log(a) },
  Symbol: Symbol('instance'),
  regx: /[a-z]/mg,
  map: new Map().set('name', 'a'),
}];

console.log(deepClone(targetArr), targetArr)