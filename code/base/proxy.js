const deepClone = require('./deepClone');

function myProxy(target, handler = {}) {

  // clone
  let proxy = deepClone(target);


  // 对 clone 属性进行观察,然后观察 target 值的变化
  Object.keys(proxy).forEach(function (key) {
    Object.defineProperty(proxy, key, {
      get: function () {
        return handler.get ? handler.get(target, key) : _[key];
      },
      set: function (value) {
        handler.set ? handler.set(target, key, value) : target[key] = value;
      }
    });
  })


  return proxy;
}

const persion = {
  name: 'yimu',
  city: '杭州'
}

_persion = myProxy(persion, {
  get: function (o, key) {
    console.log(`get ${o} ${key}:`, o[key]);
    return o[key];
  },
  set: function (o, key, value) {
    console.log(`set ${o} ${key}:`, value);
    o[key] = o.name + 'lives in' + value;
  }
})

_persion.name = 'yiyi';
_persion.city = '北京';

console.log(_persion.city);
