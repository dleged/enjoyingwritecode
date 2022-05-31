function _new(fn, ...args) {
  let object = {};
  object.__proto__ = fn.prototype;
  let ret = fn.apply(object, args);
  return ret instanceof Object ? ret : object;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p = _new(Person, 'yimu', 18);

console.log(p.name, p.age);