
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


function generateSource(source) {
  if (Array.isArray(source)) {
    return new Array();
  } else {
    return {};
  }

  return source;

}


function deepClone(source) {
  // null or not Object
  if (source === null || typeof source !== 'object') return source;
  if (source === undefined) return undefined;

  const weakMap = new WeakMap();

  // copy 最外层的空类
  let target = generateSource(source);
  const queue = [{ source, target }];

  function clone(source) {

    if (source === null || typeof source !== 'object') return source;
    if (source === undefined) return undefined;

    let dist;

    if (source instanceof Set) {
      dist = new Set(source);
    } else if (source instanceof Map) {
      dist = new Map(source);
    } else if (source instanceof Date) {
      dist = new Date(source);
    } else if (source instanceof RegExp) {
      dist = new RegExp(source.source, source.flags);
      dist.lastIndex = source.lastIndex;
    } else if (source instanceof Function) {
      dist = function () { return source.apply(this, arguments) }
    } else if (source instanceof Symbol) {
      dist = Object(Symbol.prototype.valueOf.call(source));
    } else {
      dist = Object.create(Object.getPrototypeOf(source));
    }


    return dist;
  }

  while (queue.length) {
    const { source, target } = queue.shift();
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        const val = source[key];

        if (typeof val === 'object') {
          // 循环引用
          if (weakMap.has(val)) {
            target[key] = val;
          } else {
            target[key] = clone(val); // 拷贝对象
            weakMap.set(val, target[key]);
            // ✨
            queue.push({
              source: val,
              target: target[key],
            });
          }
        } else {
          target[key] = val;
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