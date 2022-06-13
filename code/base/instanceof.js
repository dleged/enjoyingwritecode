// Object.getPrototypeOf(c) 原型链是否在 C.prototype 原型上

function instanceOf(instance, constructor) {

  let _proto = Object.getPrototypeOf(instance);
  let prototype = constructor.prototype;

  while (true) {
    if (prototype === null) {
      return false;
    }

    if (_proto === prototype) {
      return true;
    }

    prototype = prototype ? prototype.prototype : null;
  }

}

function Constructor() {
  console.log(1);
}

const con = new Constructor();

console.log(instanceOf(con, Constructor));
console.log(instanceOf('con', String));
console.log(instanceOf(con, Array));

